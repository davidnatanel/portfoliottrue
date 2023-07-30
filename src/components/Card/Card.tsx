import style from './Card.module.css'
import { Project } from '../../utils/imageProjects';
import { FiExternalLink } from 'react-icons/fi';

const Card: React.FC<Project> = ({ texten, title, img, link, technology }) => (
    <div className={style.container}>



        <img src={img} alt="" />

        <div className={style.readMe}>
            <h2>{title}</h2>
            <p>{texten}</p>
            <div className={style.Tec}>

                {technology.map((e: any) => {

                    return (
                        <div>{e.name}</div>
                    )
                })}
            </div>


        </div>

        <div className={style.loge}>

            <a href={link} target="_blank">  < FiExternalLink /></a>

        </div>

    </div>
);


export default Card;



