import style from './Main.module.css'
import david from '../../assets/Micara2.jpg'

export default function Main() {
    return (
        <div id='aboutme' className={style.container}>


            <div className={style.about}>

                <h2>Hola, Soy David👋</h2>

                <p>Soy una persona intelectualmente curiosa y apasionada por la tecnología y el desarrollo en general. Siempre busco aprender y superarme en cada oportunidad. Disfruto enfrentando nuevos desafíos, ya sea trabajando de forma individual o en equipo. Como autodidacta, he desarrollado la habilidad de adaptarme rápidamente a nuevas situaciones y resolver cualquier tipo de problema que se presente.</p>

                <button>


                    <a href="../public/cv.pdf" download     >
                        Descarga mi Currículum

                    </a>
                </button>

            </div>


            <div className={style.photo}>
                <img src={david} alt="" />
            </div>

        </div>
    )
}
