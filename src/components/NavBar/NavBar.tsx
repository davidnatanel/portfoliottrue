import styled from './NavBar.module.css';


const NavBar = () => {
    return (

        <div className={styled.containerNav}>
            <div className={styled.logo}>

                Logo
            </div>

            <ul className={styled.option}>



                <li>

                    <a href="#aboutme"> Home</a>

                </li>

                <li>

                    <a href="#Projects">Projects</a>

                </li>
                <li>

                    <a href="#Contact">Contact me</a>

                </li>

            </ul>



        </div>


    );
};

export default NavBar;