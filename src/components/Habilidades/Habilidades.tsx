import style from './Habilidades.module.css'
import technology from '../../utils/imageTech'

const Habilidades = () => {
    return (
        <div id='Habilidades' className={style.container}>
            <h2>Habilidades</h2>
            <div className={style.box}>

                {technology.map((e: any) => {

                    return (
                        <img className={style.img} src={e.img} alt="" />



                    )
                })}
            </div>
        </div>
    );
};

export default Habilidades;