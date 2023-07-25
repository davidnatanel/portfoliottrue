import style from './Card.module.css'
import { Project } from '../../utils/imageProjects';


const Card: React.FC<Project> = ({ texten, img }) => (
    <div className={style.container}>



        <img src={img} alt="" />

        <div className={style.readMe}>
            <p>{texten}</p>
        </div>

    </div>
);


export default Card;



