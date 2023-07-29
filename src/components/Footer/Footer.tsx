import styled from './Footer.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={styled.container}>

            <div className={styled.logo}>

                logo

            </div>
            <div className={styled.rights}>

                2023 - portfolio All rights reserved

            </div>
            <div className={styled.red}>


                <div>

                    <a href="https://www.linkedin.com/in/david-natanael-gomez/" target="_blank">

                        <BsLinkedin />

                    </a >
                </div>

                <div>

                    <a href="https://github.com/davidnatanel" target="_blank">
                        <BsGithub />
                    </a >
                </div>



            </div>




        </div>
    );
};

export default Footer;