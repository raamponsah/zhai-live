import NewsItemComponent from "./NewsItemComponent";
import styles from '@/styles/GridNewsList.module.css'


type article = {
    cover:string,
    title:string,
    author:string,
    link:string
}
const news:article[] = [
    {
        cover:'/images/annie-spratt-feU8G7E5ODI-unsplash.jpg',
        title:'Build classrooms for the people of Namibia',
        author:'Johnson Kuracki',
        link:''
    },
    {
        cover:'/images/annie-spratt-feU8G7E5ODI-unsplash.jpg',
        title:'Build classrooms for the people of Namibia',
        author:'Johnson Kuracki',
        link:''
    },
    {
        cover:'/images/annie-spratt-feU8G7E5ODI-unsplash.jpg',
        title:'Build classrooms for the people of Namibia',
        author:'Johnson Kuracki',
        link:''
    },
    {
        cover:'/images/annie-spratt-feU8G7E5ODI-unsplash.jpg',
        title:'Build classrooms for the people of Namibia',
        author:'Johnson Kuracki',
        link:''
    },
    {
        cover:'/images/annie-spratt-feU8G7E5ODI-unsplash.jpg',
        title:'Build classrooms for the people of Namibia',
        author:'Johnson Kuracki',
        link:''
    }

]


const GridNewsList = () => {
    return (
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <NewsItemComponent key={index} {...article} />
        ))}
      </div>
    );
  };
  
  export default GridNewsList;