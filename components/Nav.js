import Link from 'next/link'
import React from 'react';
import navStyles from '../styles/Nav.module.css';




const Nav = () => {
    
    return (
        <header>
            <nav>
                <ul className={navStyles.navBar}>
                <div>
                     <Link href="/" className={navStyles.logo}>eche</Link>
                </div>
                
                  <li>
                      <Link href="/blog">blog</Link>
                  </li>
                  <li>
                      <Link href="/snippet">snippet</Link>
                  </li>
                  <li>
                      <Link href="/exercise">exercise</Link>
                  </li>
                </ul>
            </nav>
        </header>
    );

};

export default Nav;