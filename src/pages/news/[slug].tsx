import React from "react";

type DataObject = {
  name: string;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/articles?populate=*");
  const data = await res.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = () => {

  return { paths: [{ params: { slug: "prince" } }], fallback: false };
};

const NewsArticle = ({ data }: { data: DataObject }) => {
  return <div>NewsArticle {data?.name}</div>;
};

export default NewsArticle;
