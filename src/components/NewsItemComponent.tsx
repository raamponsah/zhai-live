import Image from "next/image";
import styles from "@/styles/NewsItemComponent.module.css";
import Link from "next/link";
import { DataObjectType } from "@/pages/news/[slug]";
import { marked } from "marked";
// import DOMPurify from 'dompurify';
import DOMPurify from "isomorphic-dompurify";
import { CldImage } from "next-cloudinary";

import { parse } from 'date-format-parse';


const NewsItemComponent = (article: DataObjectType) => {
  // const excerptFunction = (content:string)=>{
  //   return content.splice(0, 200)
  // }

  return (
    <div className={styles.newsItem}>
      <div className={styles.imageContainer}>
        <Image
          width="600"
          height="600"
          src={
            article.attributes["Cover"]?.data?.attributes?.provider_metadata
              ?.public_id
          }
          alt={""}
        />

        <h3>{article.attributes["Title"]}</h3>

        {/* <h5>3rd May 2023 | Jeremy Phelps</h5> */}
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked.parse(`${article.attributes["Content"]}`),
              {
                USE_PROFILES: { html: true },
              }
            ),
          }}
        ></div>

        <div className={styles.controls}>
          <h6>
        {`${article.attributes.publishedAt}`}
          </h6>
          <h6>
            <Link
              href={`/news/${article.attributes["Title"]
                .split(" ")
                .join("-")
                .toLocaleLowerCase()}`}
            >
              Read on &rarr;
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default NewsItemComponent;
