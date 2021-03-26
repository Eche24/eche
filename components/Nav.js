import Link from 'next/link'
import React from 'react';
// import navStyles from '../styles/Nav.module.css';




const Nav = () => {
    
    return (
        <header class="container mx-auto pt-5 font-serif font-normal w-3/4">
            <nav class="flex justify-between">
                <div>
                     <Link href="/">eche</Link>
                </div>
                <ul class="flex flex-row">
                
                  <li class="pr-5">
                      <Link href="/blog">blog</Link>
                  </li>
                  <li class="pr-5">
                      <Link href="/snippet">snippet</Link>
                  </li>
                  <li class="pr-5">
                      <Link href="/exercise">exercise</Link>
                  </li>
                </ul>
            </nav>
        </header>
    );

};

export default Nav;