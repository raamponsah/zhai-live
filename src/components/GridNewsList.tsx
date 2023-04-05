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

const GridNewsList = ({ data }: { data: DataObjectType[] }) => {
  // console.log("hep?",data[0].attributes['Cover'].data.attributes.url)
  return (
    <div className={styles.newsList}>
      {data.map((article, index) => (
        <NewsItemComponent
          id={article?.id}
          content={article.attributes.Content}
          key={index}
          title={article.attributes["Title"]}
          cover={article.attributes["Cover"].data?.attributes.url}
        />
      ))}
    </div>
  );
};

export default GridNewsList;
