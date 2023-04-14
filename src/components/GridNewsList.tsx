import { DataObjectType } from "@/pages/news/[slug]";
import NewsItemComponent from "./NewsItemComponent";
import styles from "@/styles/GridNewsList.module.css";

const GridNewsList = ({ list }: { list: DataObjectType[] }) => {
  // console.log("hep?",data[0].attributes['Cover'].data.attributes.url)
  return (
    <div className={styles.newsList}>
      {list?.map((article) => (
        <div key={article?.id}>
          {/* <h1 key={article?.id}>{article?.attributes["Cover"]?.data?.attributes?.url}</h1> */}
          <NewsItemComponent {...article} />
        </div>
      ))}
    </div>
  );
};

export default GridNewsList;
