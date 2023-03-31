import React from "react";

export const getStaticProps = async () => {
  const data = 1;
  return {
    props: { data },
  };
};

export const getStaticPaths = () => {
  return { paths: [{ params: { slug: "prince" } }], fallback: false };
};

const NewsArticle = ({ data }) => {
  return <div>NewsArticle{data}</div>;
};

export default NewsArticle;
