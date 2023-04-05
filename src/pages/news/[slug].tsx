import React from "react";

type DataObjectType = {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    Cover: { data: { attributes: { url: string } } };
  };
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://zhai-strapi-cms-production.up.railway.app/api/articles"
  );
  const data = await res.json();
  console.log(data)
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://zhai-strapi-cms-production.up.railway.app/api/articles"
  );

  const { data }:{data:DataObjectType[]} = await res.json();
  console.log(data)

  const paths = data.map((d: DataObjectType) => {

    return {
      params: {
        slug: d?.attributes["Title"].split(" ").join("-").toLowerCase(),
      },
    };
  });

  return { paths, fallback: false };
};

const NewsArticle = ({ data }: { data: DataObjectType }) => {
  return <div>NewsArticles{data?.id}</div>;
};

export default NewsArticle;
