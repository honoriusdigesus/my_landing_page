import React from 'react';
import DashBoard from '../assets/dashboard.png';
import MyLandinpage from '../assets/landing_page.png';
import ApiProduct from '../assets/api_product.png';
import FetchBasic from '../assets/fetch_basic.png';
import Ecommerce from '../assets/ecommerce-springboot.png';
import TypeScript from '../assets/typescript.png';
import NET from '../assets/netcore.png';
import SpringBoot from '../assets/springboot.png';
import TailWindCSS from '../assets/tailwindcss.png';
import Angular from '../assets/angular.png';
import LogoReact from '../assets/logoreact.png';
import SQL from '../assets/sqlserver.png';
import Postgres from '../assets/postgres.png';


const Work = () => {
    return (<div id='work' className='w-full h-screen work text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-white uppercase'>Work</p>
                <p className='py-6 font-semibold'>Te invito a conocer mi trabajo y proyectos recientes. ¡Espero que
                    encuentres algo de interés!</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-6'>

                {/*Project 2*/}
                <div style={{backgroundImage: `url(${MyLandinpage})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                                Landing page
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={LogoReact} alt="Logo tailwindcss"/>
                            <img className='w-20 mx-auto minilogo rounded-full' src={TypeScript} alt="Logo TypeScript"/>
                            <img className='w-20 mx-auto minilogo bg-white rounded-full' src={TailWindCSS}
                                 alt="Logo TailWindCSS"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}

                {/*Project 3*/}
                <div style={{backgroundImage: `url(${ApiProduct})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                               API Product
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={NET} alt="Logo .NET"/>
                            <img className='w-20 mx-auto minilogo' src={SQL} alt="Logo SQL"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}


                {/*Project 1*/}
                <div style={{backgroundImage: `url(${DashBoard})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                                CRUD Dashboard
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={Angular} alt="Logo Angular"/>
                            <img className='w-20 mx-auto minilogo bg-white rounded-full' src={TailWindCSS}
                                 alt="Logo TailWindCSS"/>
                            <img className='w-20 mx-auto minilogo rounded-full' src={TypeScript}
                                 alt="Logo TypeScript"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}


                {/*Project 4*/}
                <div style={{backgroundImage: `url(${FetchBasic})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                                Fetch Basic
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={LogoReact} alt="Logo tailwindcss"/>
                            <img className='w-20 mx-auto minilogo rounded-full' src={TypeScript}
                                 alt="Logo TypeScript"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}

                {/*Project 5*/}
                <div style={{backgroundImage: `url(${Ecommerce})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                               API Ecommerce
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={SpringBoot} alt="Logo SpringBoot"/>
                            <img className='w-20 mx-auto minilogo' src={Postgres} alt="Logo Postgres"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}

                {/*Project 6*/}
                <div style={{backgroundImage: `url(${MyLandinpage})`}}
                     className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='font-bold text-white tracking-wider uppercase'>
                                Landing page
                            </span>
                        <div className='flex'>
                            <img className='w-20 mx-auto minilogo' src={LogoReact} alt="Logo tailwindcss"/>
                        </div>
                        <div className='pt-6 text-center'>
                            <a className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-4 py-3 bg-white text-black'
                               href="/">Ver</a>
                        </div>
                    </div>
                </div>
                {/***********************/}


            </div>
        </div>

    </div>);
};

export default Work;