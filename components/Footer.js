import Link from 'next/link'
import React from 'react';
// import footerStyles from '../styles/Nav.module.css';



function Nav(props) {
    return (
        <footer class="container mx-auto pt-8 font-serif font-normal w-3/4">
            <nav>
                <ul>
                    <li><Link href='/'>footer</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Nav;