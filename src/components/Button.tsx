
import styles from '@/styles/Button.module.css'
const Button = ({title, link}:{title:string, link?:string}) => {
  return (
    <button className={styles.button}>{title}</button>
  )
}

export default Button