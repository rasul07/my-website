import React from 'react';
import style from './Home.module.css'
import imageWebp from './image/01.webp'


export const Home = () => {
    return (
        <div className={style.main__body}>
            <h1 className={style.main__title}>
                <span>Hi <span className={style.main__title_smiley}>&#x1F44B;</span>,</span>
                <span>My name is</span>
                <span className={style.main__title_gradient}>Abdurasul Rustamov</span>
                <span>I am Software Engineer</span>
            </h1>
            <div className={style.main__photo}>
                <picture>
                    <source srcSet={imageWebp} type="image/webp"/>
                    <img src={imageWebp} alt="My photo"/>
                </picture>
            </div>
        </div>
    );
};


