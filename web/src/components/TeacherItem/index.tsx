import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import  './styles.css';
// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
        <img src="https://avatars0.githubusercontent.com/u/23088098?s=460&u=d8ce88682b920d593e73e9653024904442918f7b&v=4" alt="Jonatã Hofmann"/>
        <div>
            <strong>Jonatã Hofmann</strong>
            <span>Programação</span>
        </div>
        </header>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br/>
        <br/>
        Eos tempora sed, sunt enim veritatis unde dignissimos aliquam,
        ipsa accusantium exercitationem officiis magni perspiciatis porro mollitia asperiores fuga at ut suscipit.
        </p>
        <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Entrar em contato"/>
            Entrar em contato
        </button>
        </footer>
    </article>
  );
}

export default TeacherItem;