import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/student.jpg'

function AboutMe() {
  return (
    <section className='aboutMe'>
      <div className='main__container'>
        <h2 className='main__title aboutMe__title'>Студент</h2>
        <div className='aboutMe__myCard'>
          <img className='aboutMe__myPhoto' src={studentPhoto} alt='Фото студента' />
          <h3 className='aboutMe__myName'>Виталий</h3>
          <h4 className='aboutMe__myInfo'>Фронтенд-разработчик, 30 лет</h4>
          <p className='aboutMe__myComment'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <nav className='aboutMe__myLinks'>
            <a className='aboutMe__myLink' href='https://ru-ru.facebook.com/' rel='noreferrer' target='_blank'>Facebook</a>
            <a className='aboutMe__myLink' href='https://github.com/Tea-Cup-Git' rel='noreferrer' target='_blank'>Github</a>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;