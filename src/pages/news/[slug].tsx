import React from "react";

type DataObjectType = {
    id: number;
    attributes: {
      Title: string;
      Content: string;
      Cover:  { data: {attributes:{url:string}}  };
    }
  }

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/articles?populate=*");
  const data = await res.json();
  console.log()
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://zhai-strapi-cms-production.up.railway.app/api/articles");
  const {data} = await res.json();
  
  const paths = data.map((d:DataObjectType)=>{
      return {params: {slug:d?.attributes.Title.split(' ').join('-').toLowerCase()}}
  })
  return { paths, fallback: false };
};

const NewsArticle = ({ data }: {data: DataObjectType}) => {
  return <div>NewsArticle {data?.attributes.Title}</div>;
};

export default NewsArticle;
