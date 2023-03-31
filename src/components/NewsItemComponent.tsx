import Image from 'next/image'
import styles from '@/styles/NewsItemComponent.module.css'
import Link from 'next/link'

const NewsItemComponent = () => {
  return (
    <div className={styles.newsItem}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/annie-spratt-feU8G7E5ODI-unsplash.jpg"
              alt=""
             fill
             className={styles.image}
            />
          </div>

          <h3>First News Artcile i know</h3>
          <h5>3rd May 2023 | Jeremy Phelps</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            reprehenderit quos, rerum necessitatibus excepturi aut quae
            perspiciatis repellat culpa praesentium dolore, commodi voluptatibus
            vel cumque nihil veniam velit eligendi eaque?
          </p>

          <div className={styles.controls}>
            <h6>3rd May 2023</h6>
            <h6><Link href=''>Read on &rarr;</Link></h6>
          </div>
    </div>
  )
}

export default NewsItemComponent