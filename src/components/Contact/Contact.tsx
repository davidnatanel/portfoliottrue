import styled from './Contact.module.css';
import { BsTelephone, BsFillBuildingFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';


const Contact = () => {
    return (

        <div className={styled.contact}>




            <div className={styled.container}>



                <div className={styled.rigth}>

                    <h2>Contact Me</h2>

                    <div className={styled.boxSendEmail}>

                        <input placeholder='Name' type="text" />
                        <input placeholder='Email' type="text" />

                        <textarea placeholder='Message' />
                        <div>
                            <button>Send</button>

                        </div>


                    </div>
                </div>


                <div className={styled.left}>

                    <div className={styled.boxinfo}>


                        <h2>Info</h2>



                        <div className={styled.date}>

                            <div>
                                <BsTelephone />
                                <p>
                                    +23 232323 32

                                </p>

                            </div>
                            <div>

                                <FiMail />
                                <p>
                                    davidnatanaelgomez2@gmail.com

                                </p>


                            </div>

                            <div>
                                <BsFillBuildingFill />

                                <p>   Buenos Aires, Argentina </p>


                            </div>

                        </div>






                    </div>

                </div>


            </div>




        </div>
    );
};

export default Contact;