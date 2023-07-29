import styled from './Contact.module.css';
import { BsTelephone, BsFillBuildingFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_ddgl9ca', 'template_ujbhqw3', form.current, 'p2UQWHD1ig1_O3IWG')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Enviado',
                    text: 'El formulario ha sido enviado correctamente.',
                    confirmButtonText: 'Aceptar'
                });

            }, (error) => {
                console.log(error.text);
            });



    };
    return (

        <div id='Contact' className={styled.contact}>




            <div className={styled.container}>



                <div className={styled.rigth}>

                    <h2>Contact Me</h2>

                    <form ref={form} onSubmit={sendEmail} className={styled.boxSendEmail}>

                        <input placeholder='Name' type="text" name="user_name" />
                        <input placeholder='Email' type="text" name="user_email" />

                        <textarea placeholder='Message' name="message" />
                        <div>
                            <button value="Send">Send</button>

                        </div>


                    </form>
                </div>


                <div className={styled.left}>

                    <div className={styled.boxinfo}>


                        <h2>Info</h2>



                        <div className={styled.date}>

                            <div>
                                <BsTelephone />
                                <p>
                                    + 11 622950 97

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