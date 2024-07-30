import React from 'react';
import style from './Footer.module.css'
import image1 from '../header/social-icon/icons/01.svg';
import image2 from '../header/social-icon/icons/02.svg';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__body}>
                    <div className={style.footer__contacts}>
                        <ul className={style.footer__list}>
                            <li><a target="newtab" href="https://drive.google.com/file/d/1nV6UhzBN_JnXCIFIyQVH8Pn6kcKTv6by/view?usp=sharing">Resume</a></li>
                            <li><a href="mailto:iamrasulrustamov@gmail.com">iamrasulrustamov@gmail.com</a></li>
                        </ul>
                        <div className={style.footer__icons}>
                            <a className={style.footer__icon} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abdurasul-rustamov"><img src={image1} alt="icon"/></a>
                            <a className={style.footer__icon} rel="noopener noreferrer" target="_blank" href="https://github.com/rasul07"><img src={image2} alt="icon"/></a>
                        </div>
                    </div>
                </div>
                <div className={style.footer__label}>© 2024 Abdurasul Rustamov</div>
            </div>
        </footer>
    );
};
