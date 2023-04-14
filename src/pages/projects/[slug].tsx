import FullWidthSection from "@/components/BgFullWidthSection";
import Layout from "@/layouts/Layout";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_PROJECTS_URL}`);
  const { data }: { data: DataObjectType[] } = await res.json();
  const paths = data.map((d: DataObjectType) => {
    return {
      params: {
        slug: d.attributes.Slug,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  console.log(`Params => ${params?.slug}`);
  const slug = params?.slug;
  const res = await fetch(
    `https://zhai-strapi-cms-production.up.railway.app/api/projects?filters[Slug][$eq]=${slug}`
  );
  const project: DataObjectType = await res.json();
  return {
    props: { project },
  };
};

const Project = ({ project }: { project: any }) => {
  
  const { data } = project;

  return (
    <Layout>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title={data[0]?.attributes?.Title}
      ></FullWidthSection>

      <Image
        src={data[0]?.attributes?.Cover?.data?.attributes?.url}
        width={800}
        height={400}
        alt={data[0]?.attributes?.Title}
        loading="lazy"
      />
      <div>{data[0]?.attributes?.Content}</div>
    </Layout>
  );
};

export default Project;
