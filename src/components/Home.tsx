import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll";

const Home = () => {
    return (<div id='home' className='w-full h-screen banner'>
        <div className='max-w-[960px] mx-auto h-full px-6 flex flex-col justify-center'>
            <p className='text-white font-semibold mt-10'>Hola, mi nombre es</p>
            <h1 className='text-3xl text-white font-bold'>Honorius di Gesus</h1>
            <h2 className='text-2xl text-white font-bold'>y soy un Full Stack Developers</h2>
            <p className='pt-4 max-w-[700px] text-white font-semibold'>
                Soy un desarrollador en formación y en constante aprendizaje, con conocimientos en HTML, CSS, Tailwindcss, JavaScript, TypeScript,
                Angular y
                React para el desarrollo de interfaces web. También tengo conociemiento en el backend, utilizando
                Java con Spring Boot, C# en .NET Entity Framework.
                Me apasiona crear aplicaciones funcionales y mejorar continuamente mis habilidades para desarrollar
                soluciones efectivas y escalables.
            </p>
            <div>
                <button
                    onClick={() => {
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className='bg-emerald-900 text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-emerald-600 hover:border-neutral-600'>Ver
                    más <span className='duration-500'><HiArrowNarrowRight className='ml-3'/></span></button>

            </div>
        </div>
    </div>);
};

export default Home;