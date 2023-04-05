import React from "react";

type DatObjectType = {
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
  return {
    props: { data },
  };
};

// export const getStaticPaths = () => {

//   return { paths: [{ params: { slug: "prince" } }], fallback: false };
// };

const NewsArticle = ({ data }: { data: DatObjectType }) => {
  return <div>NewsArticle {data?.id}</div>;
};

export default NewsArticle;
