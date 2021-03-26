import React from 'react';
// import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
    return (
        <>
        <Nav/>
            <main class="container mx-auto flex justify-center pt-8 font-serif1 w-3/4 antialiased">
                {children}
            </main> 
        <Footer />   
        </>
    );
}

export default Layout;