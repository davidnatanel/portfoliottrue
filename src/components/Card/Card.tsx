import style from './Card.module.css'
import { Project } from '../../utils/imageProjects';
import { FiExternalLink } from 'react-icons/fi';

const Card: React.FC<Project> = ({ texten, title, img }) => (
    <div className={style.container}>



        <img src={img} alt="" />

        <div className={style.readMe}>
            <h2>{title}</h2>
            <p>{texten}</p>
        </div>

        <div className={style.loge}>

            < FiExternalLink />

        </div>

    </div>
);


export default Card;



