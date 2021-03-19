import Link from 'next/link'
import React from 'react';
import footerStyles from '../styles/Nav.module.css';



function Nav(props) {
    return (
        <header>
            <nav className={footerStyles.footer}>
                <ul>
                    <li><Link href='/'>footer</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;