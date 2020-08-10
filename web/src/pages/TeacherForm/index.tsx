import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/Textarea';
import warning from '../../assets/images/icons/warning.svg'
import Select from '../../components/Select';
import subjects_list from '../../params/subjects_list';
import week_days_list from '../../params/week_days_list';
import api from '../../services/api';
import './styles.css'


const TeacherForm: React.FC = () => {
  const [name,setName] = useState('');
  const [avatar,setAvatar] = useState('');
  const [whatsapp,setWhatsapp] = useState('');
  const [bio,setBio] = useState('');

  const [subject,setSubject] = useState('');
  const [cost,setCost] = useState('');
  const history = useHistory();


  const [scheduleItems, setScheduleItems] = useState([
    {week_day: 0, from: '', to: ''},
  ]);

  function addNewScheduleItem(){
    setScheduleItems([
        ...scheduleItems,
       {week_day: 0, from: '', to: ''}
      ])
  }
  function setScheduleItemValue(position:number, field:string, value:string){
    const updateScheduleItems = scheduleItems.map((scheduleItem, index)=>{
      if(index === position){
        return {...scheduleItem ,[field]:value}
      }
      return scheduleItem
    });
    setScheduleItems(updateScheduleItems);
   
    
  }

  function handleCreateClass(event: FormEvent){
    event.preventDefault();

    const data = {
      name,
      avatar,
      bio,
      whatsapp, 
      cost: Number(cost),
      subject,
      schedule:scheduleItems
    }

    api.post('/classes', data)
    .then(()=>{
      alert('Criado com sucesso');
      history.push('/');
    })
    .catch((err)=>{
      alert(err);
    });
   
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas."  description="O primeiro passo é preencher este formulário de inscrição"/>
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" value={name} onChange={(event)=>setName(event.target.value)}/>
          <Input name="avatar" label="Avatar" value={avatar} onChange={(event)=>setAvatar(event.target.value)}/>
          <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(event)=>setWhatsapp(event.target.value)}/>
          <TextArea name="bio" label="Biografia" value={bio} onChange={(event)=>setBio(event.target.value)}/>
          
        </fieldset>
        <fieldset>
          <legend>Sobre a Aula</legend>
          <Select 
          options={subjects_list} 
          name="subject" 
          label="Matéria" value={subject} 
          onChange={(event)=>setSubject(event.target.value)}/>
          <Input 
          name="cost" 
          label="Custo da sua hora por aula" 
          value={cost} 
          onChange={(event)=>setCost(event.target.value)}/>
        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis<button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button></legend>

          {scheduleItems.map((scheduleItem, index) =>{
            return(
            <div  key={scheduleItem.week_day} className="schedule-item">
            <Select 
              options={week_days_list} 
              name="subject" 
              label="Dia da Semana" 
              value={scheduleItem.week_day}
              onChange={(e)=>setScheduleItemValue(index, 'week_day', e.target.value)} />
            <Input 
              name="from" 
              label="Das" 
              type="time"
              value={scheduleItem.from}
              onChange={(e)=>setScheduleItemValue(index, 'from', e.target.value)}/>


            <Input 
            name="to" 
            label="Até" 
            type="time"
            value={scheduleItem.to}
            onChange={(e)=>setScheduleItemValue(index, 'to', e.target.value)}
            />
           
          </div>
          )})}
          
        </fieldset>
        <footer>
          <p>
            <img src={warning} alt="Aviso importante"/>
            Importante!<br/>
            Preecha todos os dados
          </p>
          <button type="submit">Salvar cadastro</button>
        </footer>
        </form>
      </main>
    </div>
    
  );
}

export default TeacherForm;