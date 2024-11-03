import React from 'react';

const Contact = () => {
    return (
        <div  id='work' className='w-full h-screen flex justify-center items-center p-4 contact'>
            <form action="" method="post">
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-6xl font-bold inline border-b-4 border-black'>Contact</p>
                    <p className='py-6 font-semibold text-2xl'>¿Tienes alguna pregunta o comentario? ¡Escríbeme!</p>
                </div>

                <div className='grid gap-4'>
                    <input className='rounded-full focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4' type="text" placeholder='Fullname' name='name'/>
                    <input className='rounded-full focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4'  type="email" placeholder='Email@domain.com' name='email'/>
                    <textarea className='rounded-2xl resize-none focus:border-y-green-900 focus:bg-emerald-100 focus:outline-none py-2 px-4'    rows={10} name="message" id="message" placeholder='Message'></textarea>
                    <button className='rounded-full bg-emerald-900 hover:bg-emerald-500 text-white py-2 px-4 font-semibold' type='submit'>Contact me</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;