import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_s7gd4ca', 'template_ocgxxxs', form.current, 'y6YvdU59DC49dcOzD')
                .then(
                    () => {
                        console.log('SUCCESS!');

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Email sent successfully",
                            timer: 3000
                        });
                        // Reset form
                        if (form.current) {
                            form.current.reset();
                        }
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div id='work' className='w-full h-screen flex justify-center items-center p-4 contact'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-6xl font-bold inline border-b-4 border-black uppercase'>Contact</p>
                    <p className='py-6 font-semibold text-2xl'>¿Tienes alguna pregunta o comentario? ¡Escríbeme!</p>
                </div>

                <div className='grid gap-4'>
                    <input className='rounded-full focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4' type="text" placeholder='Fullname' name='user_name' />
                    <input className='rounded-full focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4' type="email" placeholder='Email@domain.com' name='user_email' />
                    <textarea className='rounded-2xl resize-none focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4' rows={10} name="message" placeholder='Message'></textarea>
                    <button className='rounded-full bg-emerald-900 hover:bg-emerald-500 text-white py-2 px-4 font-semibold' type='submit'>Contact me</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;