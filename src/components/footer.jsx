import React from 'react';

import '../components/style/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='about-contaneir'>
        <img src='./src/assets/logo.svg' alt='logo do website'/>
        <div className='paragraphs'>
          <p>Este projeto foi desenvolvido por alunos da <span>turma 2DM</span> no SENAI Suíço-Brasileiro.</p>
          <p>Pensado para estudos sobre ferramentas como <span>API’s, React e Node</span>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;