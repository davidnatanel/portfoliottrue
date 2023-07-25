import React from 'react';
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
                <BsLinkedin />
                <BsGithub />

            </div>




        </div>
    );
};

export default Footer;