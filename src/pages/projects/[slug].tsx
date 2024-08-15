import FullWidthSection from "@/components/FullWidthSection";
import Layout from "@/layouts/Layout";
import { marked } from "marked";
import { GetStaticPropsContext } from "next";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

// Define the type for the project data
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

  const paths = data?.map((d) => ({
    params: { slug: d.attributes.Slug },
  })) || [];

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true }; // Handle case where slug is not provided
  }

  const res = await fetch(
    `https://zhai-cms-live.up.railway.app/api/projects?filters[Slug][$eq]=${slug}`
  );

  if (!res.ok) {
    console.error(`Failed to fetch project data: ${res.statusText}`);
    return { notFound: true }; // Handle fetch error
  }

  const project: { data: DataObjectType[] } = await res.json();
  return {
    props: { project },
  };
};

const Project = ({ project }: { project: { data: DataObjectType[] } }) => {
  const { data } = project;

  if (!data || data.length === 0) {
    return <div>No project found.</div>; // Handle case where project data is empty
  }

  return (
    <Layout>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title={data[0]?.attributes?.Title}
      />

      {/* Uncomment the Image component if needed */}
      {/* <Image
        src={data[0]?.attributes.Cover?.data?.attributes.url}
        width={800}
        height={400}
        alt={data[0]?.attributes.Title}
        loading="lazy"
      /> */}

      <FullWidthSection bgColor="white">
        <div
          style={{ marginTop: "-20vh" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked.parse(data[0].attributes.Content),
              { USE_PROFILES: { html: true } }
            ),
          }}
        />
      </FullWidthSection>
    </Layout>
  );
};

export default Project;