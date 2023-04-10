import FullWidthSection from "@/components/BgFullWidthSection";
import Layout from "@/layouts/Layout";
import {
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPageContext,
} from "next";
import React from "react";

export type DataObjectType = {
  id: number;
  attributes: {
    publishedAt: string;
    Title: string;
    Content: string;
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
        slug: d?.attributes["Title"].split(" ").join("-").toLowerCase(),
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ARTICLES_ROUTE}/${params?.slug}`
  );
  const data = await res.json();
  console.log(data)
  return {
    props: { data },
  };
};

const NewsArticle = ({ data }: { data: DataObjectType }) => {
  return (
    <Layout>
      <FullWidthSection bgColor="purple" color="white" title="Something here"></FullWidthSection>
    </Layout>
  );
};

export default NewsArticle;
