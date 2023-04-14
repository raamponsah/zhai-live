import Image from "next/image";
import styles from "@/styles/NewsItemComponent.module.css";
import Link from "next/link";
import { DataObjectType } from "@/pages/news/[slug]";
import { marked } from "marked";
// import DOMPurify from 'dompurify';
import DOMPurify from "isomorphic-dompurify";
import { tsToUtcFormat } from "date-format-ms";

const NewsItemComponent = (article: DataObjectType) => {
  console.log("article: ",article);
  return (
    <div className={styles.newsItem}>
      <div className={styles.imageContainer}>
        <Image
        width={650}
        height={400}
          src={article.attributes["Cover"]?.data?.attributes?.url}
          alt={article.attributes["Title"]}
          style={{borderRadius:'20px', marginBottom:'15px', top:0, left:0}}

        />
        </div>
        
        <div>

        <h3>{article.attributes["Title"]}</h3>
        <h5 style={{ fontStyle: "italic" }}>
          {tsToUtcFormat(
            Date.parse(`${article.attributes.publishedAt}`),
            "D d M Y"
          )}
        </h5>
        {/* <h5>3rd May 2023 | Jeremy Phelps</h5> */}

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked.parse(`${article.attributes["Excerpt"]}`),
              {
                USE_PROFILES: { html: true },
              }
            ),
          }}
        ></div>

        <div className={styles.controls}>
          <h6>
            {tsToUtcFormat(
              Date.parse(`${article.attributes.publishedAt}`),
              "D d M Y"
            )}
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
