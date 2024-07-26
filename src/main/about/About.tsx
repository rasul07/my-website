import React from 'react';
import style from './About.module.css'
import {Text} from '../componets/Text';
import {BlockTitle} from '../componets/BlockTitle';
import image from './img/01.jpg'

type AboutPropsType = {
    id: string
}

export const About = (props: AboutPropsType) => {
    return (
        <div className={style.about} id={props.id}>
            <div className={style.about__body}>
                <BlockTitle title={'About'} subTitle={'My professional activity'}/>
                <div className={style.about__content}>
                    <div className={style.about__photo}>
                        <img src={image} alt="My Photo"/>
                    </div>
                    <div className={style.text}>
                    I am an experienced Software Engineer with over three years of commercial experience in developing, maintaining, and testing high-performance, scalable applications. My expertise lies in backend development, particularly with the Go programming language. I have a proven track record of delivering robust and efficient solutions for complex systems, ensuring they meet both current needs and future scalability.
                    <br /><br />In addition to my proficiency in Go, I have a keen interest in emerging AI technologies and their applications. I am passionate about exploring how AI can be integrated into software solutions to enhance functionality, improve user experiences, and drive innovation. My curiosity and commitment to continuous learning keep me at the forefront of technological advancements, allowing me to bring cutting-edge solutions to the projects I work on.
                    </div>
                </div>
            </div>
        </div>
    );
};
