import React from 'react'
import style from './Card.module.css'
import { Project } from '../../utils/imageProjects';


const Card: React.FC<Project> = ({ title, texten, img }) => (
    <div className={style.container}>
        {/* <h2>{title}</h2> */}


        <img src={img} alt="" />

        <div className={style.readMe}>
            <p>{texten}</p>
        </div>

    </div>
);


export default Card;



