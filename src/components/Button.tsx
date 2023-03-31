
import styles from '@/styles/Button.module.css'
const Button = ({title, link, type}:{title:string, link?:string, type?:string}) => {
  return (
    <button  className={styles.button}>{title}</button>
  )
}

export default Button