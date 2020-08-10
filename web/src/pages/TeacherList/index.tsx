import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css'
import week_days_list from '../../params/week_days_list';
import subjects_list from '../../params/subjects_list';
import api from '../../services/api';
// import { Container } from './styles';


const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

async function seachTeachers(e: FormEvent){
  e.preventDefault();
  
  const response = await api.get(`/classes`,{
    params:{
      subject,
      week_day,
      time
    }
  })

  setTeachers(response.data);
}
  return (
          <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
              <form action="" id="search-teachers" onSubmit={seachTeachers}>
                <Select 
                  options={subjects_list} 
                  name="subject" 
                  label="Matéria" 
                  value={subject}
                  onChange={e=> setSubject(e.target.value)}/>
                <Select 
                  options={week_days_list} 
                  name="subject" 
                  label="Dia da Semana" 
                  value={week_day}
                  onChange={e=> setWeekDay(e.target.value)}/>
                <Input 
                  name="time" 
                  label="Hora" 
                  type="time"
                  value={time}
                  onChange={
                    e=> {setTime(e.target.value)}
                  }/>
                  <button type="submit">Buscar</button>
              </form>
            </PageHeader>
            <main>
              {teachers.map((teacher:Teacher)=>{
                return <TeacherItem key={teacher.id} teacher={teacher} />
              })}
           
            </main>
          </div>
     );
}

export default TeacherList;