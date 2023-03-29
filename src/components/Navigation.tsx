import Link from 'next/link'
import React from 'react'

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
        <nav>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    </>
  )
}

export default Navigation