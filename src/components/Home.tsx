import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (<div id='home' className='w-full h-screen banner'>
        <div className='max-w-[960px] mx-auto h-full px-8 flex flex-col justify-center'>
            <p className='text-white text-2xl font-semibold'>Hola, mi nombre es</p>
            <h1 className='text-6xl text-white font-bold sm:text-7xl'>Honorius di Gesus</h1>
            <h2 className='text-6xl text-white font-bold sm:text-5xl'>y soy un Full Stack Developers</h2>
            <p className='py-4 max-w-[700px] text-white'>
                Soy un desarrollador en formación, con conocimientos en HTML, CSS, Tailwindcss, JavaScript, TypeScript,
                Angular y
                React para el desarrollo de interfaces web. También tengo conociemiento en el backend, utilizando
                Java con Spring Boot, C# en .NET Entity Framework.
                Me apasiona crear aplicaciones funcionales y mejorar continuamente mis habilidades para desarrollar
                soluciones efectivas y escalables. Estoy en
                constante aprendizaje y abierto a nuevos retos en el mundo del desarrollo.
            </p>
            <div>
                <button
                    className='bg-emerald-900 text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-emerald-600 hover:border-neutral-600'>Ver
                    más <span className='duration-500'><HiArrowNarrowRight className='ml-3'/></span></button>

            </div>
        </div>
    </div>);
};

export default Home;