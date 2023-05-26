import FullWidthSection from "@/components/FullWidthSection";
import Layout from "@/layouts/Layout";

import { marked } from "marked";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_ARTICLES_URL}`);
  const { data }: { data: any[] } = await res.json();

    return {
     paths:  data?.map((d: any) => {
        return {
          params: {
            slug: d?.attributes?.Slug,
          },
        }
      }),
      fallback: false
    };
 

  
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  console.log(`Params => ${params?.slug}`);
  const slug = params?.slug;
  const res = await fetch(
    `https://zhai-cms-live.up.railway.app/api/articles?filters[Slug][$eq]=${slug}`
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

      {/* <Image
        src={data[0]?.attributes["Cover"]?.data?.attributes?.url}
        width={800}
        height={400}
        alt={data[0]?.attributes?.Title}
        loading="lazy"
      /> */}

      <FullWidthSection bgColor="white">
        <div
          style={{ marginTop: "-20vh" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked.parse(`${data[0].attributes["Content"]}`),
              {
                USE_PROFILES: { html: true },
              }
            ),
          }}
        ></div>
      </FullWidthSection>
    </Layout>
  );
};

export default Project;
