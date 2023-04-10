import FullWidthSection from "@/components/BgFullWidthSection";
import Layout from "@/layouts/Layout";
import { GetStaticPropsContext } from "next";
import React from "react";

export type DataObjectType = {
  id: number;
  attributes: {
    publishedAt: string;
    Title: string;
    Content: string;
    Slug: string;
    Cover: {
      data: {
        id: number;
        attributes: { url: string; provider_metadata: { public_id: string } };
      };
    };
    Excerpt?: string;
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);
  const { data }: { data: DataObjectType[] } = await res.json();
  const paths = data?.map((d: DataObjectType) => {
    return {
      params: {
        slug: d.attributes.Slug,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  console.log(`Params => ${params}`)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ARTICLES_ROUTE}/${params?.slug}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
};

const NewsArticle = ({ data }: { data: DataObjectType }) => {
  console.log(data);
  return (
    <Layout>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title={data?.attributes?.Title}
      ></FullWidthSection>

      <div>
        <img src={data?.attributes?.Cover?.data?.attributes?.url} />
        <div>{data?.attributes?.Content}</div>
      </div>
    </Layout>
  );
};

export default NewsArticle;
