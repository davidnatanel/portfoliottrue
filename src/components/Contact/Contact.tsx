import styled from './Contact.module.css';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';


const Contact = () => {
    return (

        <div className={styled.contact}>

            <h1 style={{ color: "white" }}>contact</h1>
            <div className={styled.container}>


                <div className={styled.left}>

                    <div className={styled.boxinfo}>


                        <div>
                            <h2>Dropp me a message</h2>
                            <p>

                                hola coomo estas gracia spor llegar hasta aqui
                            </p>


                        </div>

                        <div>
                            <BsTelephone />
                            +2323232332

                        </div>
                        <div>

                            <FiMail />
                            davidnatanaelgomez2@gmail.com

                        </div>
                        <div>

                            <img src="" alt="" />
                        </div>

                    </div>

                </div>


                <div className={styled.rigth}>

                    <div className={styled.boxSendEmail}>
                        <input placeholder='Name' type="text" />
                        <input placeholder='Email' type="text" />
                        <input placeholder='Message' type="text" />
                        <div>
                            <button>Send</button>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;