import styled from './Experiencie.module.css';
import { FaReact } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoNodejs } from 'react-icons/bi';

const Experiencie = () => {
    return (
        <div className={styled.container}>


            <FaReact />
            <BiLogoJavascript />
            <BiLogoNodejs />

        </div>
    );
};

export default Experiencie;