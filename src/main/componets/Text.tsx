import React from 'react';
import style from './Text.module.css'

type TextProps = {
    text: string
}

export const Text = (props: TextProps) => {
    return (
        <div className={style.text}>
            <p>{props.text}</p>
        </div>
    )
};
