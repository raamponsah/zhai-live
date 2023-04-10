import { DataObjectType } from "@/pages/news/[slug]";
import NewsItemComponent from "./NewsItemComponent";
import styles from "@/styles/GridNewsList.module.css";

type article = {
  cover: string;
  title: string;
  author: string;
  link: string;
};
const news: article[] = [
  {
    cover: "/images/annie-spratt-feU8G7E5ODI-unsplash.jpg",
    title: "Build classrooms for the people of Namibia",
    author: "Johnson Kuracki",
    link: "",
  },
  {
    cover: "/images/annie-spratt-feU8G7E5ODI-unsplash.jpg",
    title: "Build classrooms for the people of Namibia",
    author: "Johnson Kuracki",
    link: "",
  },
  {
    cover: "/images/annie-spratt-feU8G7E5ODI-unsplash.jpg",
    title: "Build classrooms for the people of Namibia",
    author: "Johnson Kuracki",
    link: "",
  },
  {
    cover: "/images/annie-spratt-feU8G7E5ODI-unsplash.jpg",
    title: "Build classrooms for the people of Namibia",
    author: "Johnson Kuracki",
    link: "",
  },
  {
    cover: "/images/annie-spratt-feU8G7E5ODI-unsplash.jpg",
    title: "Build classrooms for the people of Namibia",
    author: "Johnson Kuracki",
    link: "",
  },
];

const GridNewsList = ({ list }: { list: DataObjectType[] }) => {
  // console.log("hep?",data[0].attributes['Cover'].data.attributes.url)
  return (
    <div className={styles.newsList}>
      {list.map((article) => (
       <>
        {/* <h1 key={article?.id}>{article?.attributes["Cover"]?.data?.attributes?.url}</h1> */}
        <NewsItemComponent
          key={article?.id}
          id={article?.id}
          attributes={article?.attributes}
        />
       </>
      ))}
    </div>
  );
};

export default GridNewsList;
