import styled from './NavBar.module.css';
import Logo from '../../assets/D.png'

const NavBar = () => {
    return (

        <div className={styled.containerNav}>
            <div className={styled.logo}>


                <img className={styled.loge} src={Logo} alt="" />

            </div>

            <ul className={styled.option}>



                <li>

                    <a href="#aboutme"> Home</a>

                </li>

                <li>

                    <a href="#Projects">Projects</a>

                </li>

                <li>

                    <a href="#Habilidades">Habilidades</a>

                </li>

                <li>

                    <a href="#Contact">Contact me</a>

                </li>

            </ul>



        </div>


    );
};

export default NavBar;