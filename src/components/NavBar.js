import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className='bg-white'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to='/' 
                    exact
                    activeClassName='text-white bg-blue-700' 
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-blue-400 text-lg font-bold cursive'>
                        Home
                    </NavLink>
                    <NavLink 
                    to='/post'
                    activeClassName='text-white bg-blue-700'
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-blue-400 text-lg font-bold cursive'
                    >
                        Blog Posts
                    </NavLink>
                    {/* <NavLink to='/project'
                    activeClassName='text-white bg-blue-700'
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-blue-400 text-lg font-bold cursive'
                    >
                        Projects
                    </NavLink> */}
                    <NavLink to='/about'
                    activeClassName='text-white bg-blue-700'
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-blue-400 text-lg font-bold cursive'
                    >
                        About me!
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://github.com/rafaelsmaria' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://twitter.com/rafaelmaria_dev' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://www.linkedin.com/in/rafaelsmaria/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}