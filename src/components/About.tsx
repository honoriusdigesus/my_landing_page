import React from 'react';

const About = () => {
    return (<div id='about' className='w-full h-screen about text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 px-4'>
                    <p className='text-6xl font-bold inline border-b-4 border-white-900'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className=''>
                    <p className='sm:text-right text-4xl font-bold'>Hola, soy Honorius. Un placer conocerte.</p>
                </div>
                <div className='px-4'>
                    <p className='font-semibold'>Honorio es un ingeniero electrónico apasionado por la
                        tecnología y la programación. Aporta compromiso, adaptabilidad y una mentalidad de
                        crecimiento constante. Su enfoque está en aprender y mejorar constantemente sus habilidades para
                        enfrentar desafíos técnicos, contribuyendo con soluciones prácticas y efectivas en cada
                        proyecto.</p>
                </div>
            </div>
        </div>
        <div className=''></div>
    </div>);
};

export default About;