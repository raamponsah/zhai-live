
import styles from '@/styles/Button.module.css'
import Link from 'next/link'
const Button = ({title, link, type}:{title:string, link?:string, type?:string}) => {
  return (
    <Link href="/contact"  className={styles.button}>{title}</Link>
  )
}

export default Button