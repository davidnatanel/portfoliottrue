import React from 'react';
import styled from './NavBar.module.css';


const NavBar = () => {
    return (

        <div className={styled.containerNav}>
            <div className={styled.logo}>

                Logo
            </div>

            <ul className={styled.option}>


                <li>HOME</li>
                <li>ABOUT ME</li>
                <li>SERVICES</li>
                <li>EXPERIENCIE</li>
            </ul>

            <div className={styled.button}>

                <button>CONTACT</button>

            </div>

        </div>


    );
};

export default NavBar;