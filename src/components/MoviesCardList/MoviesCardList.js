import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';
import firstPic from '../../images/pic1.png';
import secondPic from '../../images/pic2.png';
import thirdPic from '../../images/pic3.png';
import fourthPic from '../../images/pic4.png';
import fifthPic from '../../images/pic5.png';
import sixthPic from '../../images/pic6.png';
import seventhPic from '../../images/pic7.png';

function MoviesCardList({location}) {
  return (
    <section className='moviesCardList'>
      <div className='moviesCardList__container'>
        <MoviesCard
          title={'33 слова о дизайне'}
          duration={'1ч 42м'}
          image={firstPic}
          isLiked={true}
          location={location}
        />
        <MoviesCard
          title={'Киноальманах «100 лет дизайна»'}
          duration={'1ч 42м'}
          image={secondPic}
          isLiked={true}
          location={location}
        />
        <MoviesCard
          title={'В погоне за Бенкси'}
          duration={'1ч 42м'}
          image={thirdPic}
          isLiked={false}
          location={location}
        />
        <MoviesCard
          title={'Баския: Взрыв реальности'}
          duration={'1ч 42м'}
          image={fourthPic}
          isLiked={false}
          location={location}
        />
        <MoviesCard
          title={'Бег это свобода'}
          duration={'1ч 42м'}
          image={fifthPic}
          isLiked={true}
          location={location}
        />
        <MoviesCard
          title={'Книготорговцы'}
          duration={'1ч 42м'}
          image={sixthPic}
          isLiked={false}
          location={location}
        />
        <MoviesCard
          title={'Когда я думаю о Германии ночью'}
          duration={'1ч 42м'}
          image={seventhPic}
          isLiked={false}
          location={location}
        />
      </div>
      <button className='moviesCardList__button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList;