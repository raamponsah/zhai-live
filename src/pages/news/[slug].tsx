import React from "react";

export type DataObjectType = {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    Cover: { data: { attributes: { url: string } } };
  };
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);
  const data = await res.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);

  const { data }: { data: DataObjectType[] } = await res.json();
  const paths = data?.map((d: DataObjectType) => {
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
