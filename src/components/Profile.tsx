import React from 'react'
import styles from '@/styles/Profile.module.css'
import Image from 'next/image'

const Profile = ({src,name, position, description}:{src:string, position:string, name:string, description:string}) => {
  return (
    <div className={styles.profile}>
    <div className={styles.imageBox}>
        <Image src={src} width={300} height={300} alt='Zihao' />
    </div>
    <div className={styles.textBox}>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
        </div>
</div>

  )
}

export default Profile