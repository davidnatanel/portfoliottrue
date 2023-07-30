import styled from './Footer.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Logo from '../../assets/D.png'

const Footer = () => {
    return (
        <div className={styled.container}>

            <div className={styled.logo}>

                <div className={styled.logo}>


                    <img className={styled.loge} src={Logo} alt="" />

                </div>

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