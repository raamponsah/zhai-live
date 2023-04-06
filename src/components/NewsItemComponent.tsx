import Image from "next/image";
import styles from "@/styles/NewsItemComponent.module.css";
import Link from "next/link";
import { DataObjectType } from "@/pages/news/[slug]";
import { marked } from 'marked';
import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';
import DOMPurify from 'isomorphic-dompurify';


const NewsItemComponent = ({ id, attributes }: DataObjectType) => {
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

      <h3>{attributes["Title"]}</h3>
      <h5>3rd May 2023 | Jeremy Phelps</h5>
      <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked.parse(`${attributes['Content']}`), {USE_PROFILES: {html: true}})}}>

      </div>

      <div className={styles.controls}>
        <h6>3rd May 2023</h6>
        <h6>
          <Link href={`http://localhost:1337/news/${id}`}>Read on &rarr;</Link>
        </h6>
        </div>
        
    </div>
  );
};

export default NewsItemComponent;
