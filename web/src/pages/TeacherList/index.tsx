import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css'
import week_days_list from '../../params/week_days_list';
import subjects_list from '../../params/subjects_list';
// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
          <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
              <form action="" id="search-teachers">
                <Select options={subjects_list} name="subject" label="Matéria" />
                <Select options={week_days_list} name="subject" label="Dia da Semana" />
                <Input name="time" label="Hora" type="time"/>
              </form>
            </PageHeader>
            <main>
              
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            </main>
          </div>
     );
}

export default TeacherList;