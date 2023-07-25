import React from 'react'
import style from './Main.module.css'
import david from '../../assets/Micara2.jpg'

export default function Main() {
    return (
        <div
            className={style.container}
        >


            <div className={style.about}>

                <h2>Hola, Soy david👋</h2>

                <p>Soy una persona intelectualmente curiosa y apasionada por la tecnología y el desarrollo en general. Siempre busco aprender y superarme en cada oportunidad. Disfruto enfrentando nuevos desafíos, ya sea trabajando de forma individual o en equipo. Como autodidacta, he desarrollado la habilidad de adaptarme rápidamente a nuevas situaciones y resolver cualquier tipo de problema que se presente.</p>
                <button>Descarga mi curriculum</button>
            </div>


            <div className={style.photo}>
                <img src={david} alt="" />
            </div>

        </div>
    )
}
