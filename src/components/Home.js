import React from 'react';
import background from '../assets/background.png';

export default function Home() {
    return (
        <main>
            <img src={background} alt='Background' className='absolute object-cover w-full h-full ' />
        </main>
    )
}