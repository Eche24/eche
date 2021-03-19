import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
    return (
        <>
        <Nav/>
         <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main> 
        </div>
        <Footer />   
        </>
    );
}

export default Layout;