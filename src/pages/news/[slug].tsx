import FullWidthSection from "@/components/FullWidthSection";
import Layout from "@/layouts/Layout";
import { marked } from "marked";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

// Define the type for the article data
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_ARTICLES_URL}`);
    const { data }: { data: DataObjectType[] } = await res.json();

    const paths = data.map((d) => ({
      params: { slug: d.attributes.Slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true }; // Return 404 if slug is not found
  }

  try {
    const res = await fetch(
      `https://zhai-cms-live.up.railway.app/api/articles?filters[Slug][$eq]=${slug}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }

    const project: { data: DataObjectType[] } = await res.json();

    return {
      props: { project },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { notFound: true }; // Return 404 if article is not found
  }
};

const Article = ({ project }: { project: { data: DataObjectType[] } }) => {
  const { data } = project;

  if (!data || data.length === 0) {
    return <div>No article found.</div>; // Handle case where data is empty
  }

  return (
    <Layout>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title={data[0]?.attributes?.Title}
      />

      {data[0]?.attributes["Cover"]?.data?.attributes?.url && (
        <Image
          src={data[0].attributes["Cover"].data.attributes.url}
          width={800}
          height={400}
          alt={data[0]?.attributes?.Title}
        />
      )}

      <FullWidthSection bgColor="white">
        <div
          style={{ marginTop: "-20vh" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked.parse(data[0].attributes["Content"]),
              {
                USE_PROFILES: { html: true },
              }
            ),
          }}
        />
      </FullWidthSection>
    </Layout>
  );
};

export default Article;