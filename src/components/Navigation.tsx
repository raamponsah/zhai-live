import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Navigation.module.css'
const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Donate',
        link: '/donate'
    }
]


const Navigation = () => {
  return (
    <>
  
        <nav className={styles.navigation}>
        <h1>Zhai Foundation</h1>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <Link href=''>
    <span>Donate</span>
</Link>
        </nav>

    </>
  )
}

export default Navigation