
import style from './Proyects.module.css'
import Card from '../Card/Card';

import ProjectsList from '../../utils/imageProjects';

export default function Proyects() {
    return (
        <div className={style.container}
        >

            <h1 style={{ color: "white" }}>contact</h1>



            <main>

                {ProjectsList.map((card) => (
                    <Card key={card.id} id={card.id} title={card.title} texten={card.texten} textes={''} img={card.img} git={''} link={''} technology={[]} />
                ))}

            </main>



        </div>
    )
}
