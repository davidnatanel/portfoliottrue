import styled from './NavBar.module.css';


const NavBar = () => {
    return (

        <div className={styled.containerNav}>
            <div className={styled.logo}>

                Logo
            </div>

            <ul className={styled.option}>



                <li>

                    <a href="#aboutme"> ABOUT ME</a>

                </li>

                <li>

                    <a href="#Projects">PROJECTS</a>

                </li>


            </ul>

            <div className={styled.button}>

                <button>

                    <a href="#Contact">CONTACT</a>

                </button>

            </div>

        </div>


    );
};

export default NavBar;