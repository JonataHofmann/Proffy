import { Request, Response } from 'express';

import db from '../database/connection';
import ScheduleItem from '../interfaces/ScheduleItem';
import { convertHourToMinutes } from '../utils/functions';

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;
        const week_day = filters.week_day as string;
        const time = filters.time as string;
        const subject = filters.subject as string;

        if (!week_day || !subject || !time) {
            return response.status(400).json({
                error: 'Missing filters to search classes!',
            });
        }
        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [
                        Number(week_day),
                    ])
                    .whereRaw('`class_schedule`.`from` <= ??', [
                        Number(timeInMinutes),
                    ])
                    .whereRaw('`class_schedule`.`to` > ??', [
                        Number(timeInMinutes),
                    ]);
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.status(201).json(classes);
    }
    async create(request: Request, response: Response) {
        const data = request.body;
        console.log(data);
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = request.body;

        const transaction = await db.transaction();
        try {
            const insertedClassesIds = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
            const user_id = insertedClassesIds[0];
            const insertedClasessIds = await transaction('classes').insert({
                subject,
                cost,
                user_id,
            });
            const class_id = insertedClasessIds[0];
            const classSchedule = schedule.map((item: ScheduleItem) => {
                return {
                    week_day: item.week_day,
                    from: convertHourToMinutes(item.from),
                    to: convertHourToMinutes(item.to),
                    class_id,
                };
            });

            await transaction('class_schedule').insert(classSchedule);

            await transaction.commit();
            return response.status(201).send();
        } catch (error) {
            transaction.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class!',
            });
        }
    }
}
