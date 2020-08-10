import React, { FormEvent } from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import  './styles.css';
import api from '../../services/api';
// import { Container } from './styles';
export interface Teacher{
    id:number;
    name:string;
    avatar:string;
    bio:string;
    cost:number;
    subject:string;
    whatsapp:string; 
    user_id:number;
}

interface TeacherItemProps{
  teacher: Teacher
}
const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function createNewConnection(e: FormEvent){
    api.post('/connections',{user_id:teacher.user_id})
  }
  return (
    <article className="teacher-item">
        <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
        </header>
        <p>
        {teacher.bio}
        </p>
        <footer>
        <p>
            Preço/hora
            <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`http://wa.me/${teacher.whatsapp}`} target="_blank" type="button">
            <img src={whatsappIcon} alt="Entrar em contato"/>
            Entrar em contato
        </a>
        </footer>
    </article>
  );
}

export default TeacherItem;