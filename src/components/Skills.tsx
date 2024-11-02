import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import TYPESCRIPT from '../assets/typescript.png';
import NET from '../assets/netcore.png';
import SPRING_BOOT from '../assets/springboot.png';
import JAVASCRIPT from '../assets/js.png';
import TAILWINDCSS from '../assets/tailwindcss.png';
import GITHUB from '../assets/github.png';
import ANGULAR from '../assets/angular.png';
import REACT from '../assets/logoreact.png';
import POSTMAN from '../assets/postman.svg';
import SQL from '../assets/sqlserver.png';
import PYTHON from '../assets/python.png';
import POSTGRES from '../assets/postgres.png';
import BOOSTRAP from '../assets/boostrap.png';


const Skills = () => {
    return (<div id='skills' className='w-full h-screen skills'>
        <div className='max-w-[1000px] mx-auto p-8 w-full h-full flex flex-col justify-center'>
            <div className='mb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Skills</p>
            </div>

            <div className='w-full text-center py-8 grid grid-cols-3 sm:grid-cols-5 gap-6'>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="Logo html"/>
                    <p className='my-4 text-white font-semibold'>HTML</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="Logo CSS"/>
                    <p className='my-4 text-white font-semibold'>CSS</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={TYPESCRIPT} alt="Logo typescript"/>
                    <p className='my-4 text-white font-semibold'>TypeScript</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="Logo javascript"/>
                    <p className='my-4 text-white font-semibold'>JavaScript</p>
                </div>


                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={NET} alt="Logo .net core"/>
                    <p className='my-4 text-white font-semibold'>.NET Core</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={SPRING_BOOT} alt="Logo .net core"/>
                    <p className='my-4 text-white font-semibold'>Spring Boot</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={TAILWINDCSS} alt="Logo tailwindcss"/>
                    <p className='my-4 text-white font-semibold'>Tailwindcss</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ANGULAR} alt="Logo angular"/>
                    <p className='my-4 text-white font-semibold'>Angular</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={REACT} alt="Logo react"/>
                    <p className='my-4 text-white font-semibold'>React</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="Logo github"/>
                    <p className='my-4 text-white font-semibold'>Github</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={POSTMAN} alt="Logo postman"/>
                    <p className='my-4 text-white font-semibold'>Postman</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={SQL} alt="Logo sql"/>
                    <p className='my-4 text-white font-semibold'>SQL Server</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={POSTGRES} alt="Logo Postgres"/>
                    <p className='my-4 text-white font-semibold'>Postgres</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={BOOSTRAP} alt="Logo bootstrap"/>
                    <p className='my-4 text-white font-semibold'>bootstrap</p>
                </div>

                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="Logo Python"/>
                    <p className='my-4 text-white font-semibold'>Python</p>
                </div>

            </div>
        </div>
    </div>);
};

export default Skills;