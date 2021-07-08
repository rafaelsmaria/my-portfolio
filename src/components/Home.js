import React from 'react';
import background from '../assets/background1.jpg';

export default function Home() {
    return (
        <main>
            <img src={background} alt='Background' className='absolute object-cover w-full h-full ' />
            <section className='relative ' >
                <h1 className='text-2xl text-white pt-64 px-5' >
                Welcome to my portfolio!
                </h1>
            </section>
        </main>
    )
}