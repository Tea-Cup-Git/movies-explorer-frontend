import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">О проекте</h2>
        <dl className="aboutProject__dl">
          <div>
            <dt className="aboutProject__dt">Дипломный проект включал 5 этапов</dt>
            <dd className="aboutProject__dd">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</dd>
          </div>
          <div>
            <dt className="aboutProject__dt">На выполнение диплома ушло 5 недель</dt>
            <dd className="aboutProject__dd">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</dd>
          </div>
        </dl>
        <table className="aboutProject__table">
          <tr className="aboutProject__tableRow aboutProject__tableRow_upper">
            <td className="aboutProject__tableCell aboutProject__tableCell_short aboutProject__tableCell_accented">1 неделя</td>
            <td className="aboutProject__tableCell">4 недели</td>
          </tr>
          <tr className="aboutProject__tableRow">
            <td className="aboutProject__tableCell aboutProject__tableCell_lower">Back-end</td>
            <td className="aboutProject__tableCell aboutProject__tableCell_lower">Front-end</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default AboutProject;