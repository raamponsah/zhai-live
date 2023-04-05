import Image from 'next/image'
import styles from '@/styles/NewsItemComponent.module.css'
import Link from 'next/link'

const NewsItemComponent = ({id, cover, content, title}:{id:number, cover:string, content:string, title:string}) => {
  
  // const excerptFunction = (content:string)=>{
  //   return content.splice(0, 200)
  // }
  
  return (
    <div className={styles.newsItem}>
          <div className={styles.imageContainer}>
            {/* <Image
              src={cover}
              alt=""
             fill
             className={styles.image}
            /> */}
          </div>

          <h3>{title} {cover}</h3>
          {/* <h5>3rd May 2023 | Jeremy Phelps</h5> */}
       {content}

          <div className={styles.controls}>
            <h6>3rd May 2023</h6>
            <h6><Link href={`http://localhost:1337/news/${id}`}>Read on &rarr;</Link></h6>
          </div>
    </div>
  )
}

export default NewsItemComponent