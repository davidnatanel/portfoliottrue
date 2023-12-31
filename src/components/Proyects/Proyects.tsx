
import style from './Proyects.module.css'
import Card from '../Card/Card';

import ProjectsList from '../../utils/imageProjects';

export default function Proyects() {
    return (
        <div id='Projects' className={style.container}
        >

            <h1 style={{ color: "white" }}>Projects</h1>



            <main>

                {ProjectsList.map((card) => (
                    <Card key={card.id} id={card.id} title={card.title} texten={card.texten} textes={''} img={card.img} git={''} link={card.link} technology={card.technology} />
                ))}

            </main>



        </div>
    )
}
