import style from './Main.module.css'
import david from '../../assets/Micara2.jpg'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Main() {
    return (
        <div id='aboutme' className={style.container}>


            <div className={style.about}>

                <h2>Hola, Soy David👋</h2>
                <div className={style.detail} ></div>
                <p>
                    Apasionado por tecnología y desarrollo, curioso y autodidacta. Busco aprender y superarme constantemente. Habilidad para resolver desafíos, colaborar en equipo y adaptarme rápidamente a nuevas situaciones. Comprometido con el avance tecnológico y el impacto positivo en la sociedad.</p>

                <div className={style.detail2} ></div>


                <div className={style.option}>
                    <div className={style.left}>
                        <button>


                            <a href="../public/cv.pdf" download     >
                                Descarga mi Currículum

                            </a>
                        </button>

                    </div>

                    <div className={style.rigth}>


                        <div className={style.loge}>

                            <a href="https://www.linkedin.com/in/david-natanael-gomez/" target="_blank">

                                <BsLinkedin />

                            </a >
                        </div>

                        <div className={style.loge}>

                            <a href="https://github.com/davidnatanel" target="_blank">
                                <BsGithub />
                            </a >
                        </div>
                    </div>



                </div>



            </div>


            <div className={style.photo}>
                <img src={david} alt="" />
            </div>

        </div>
    )
}
