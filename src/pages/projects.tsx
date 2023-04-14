import FullWidthSection from "@/components/BgFullWidthSection";
import Navigation from "@/components/Navigation";
import React from "react";
import { DataObjectType } from "./news/[slug]";
import StyledSection from "@/components/StyledSection";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <Navigation></Navigation>
      <FullWidthSection
        color="white"
        title="Projects"
        subphrase="The Zhai Foundation focuses on several causes aimed at improving the lives of disadvantaged and marginalized communities in Africa. These include education, health, widowhood support, and orphanage support. The foundation provides educational opportunities, healthcare services, and support to widows and orphans to help them achieve a better quality of life. The Zhai Foundation is committed to empowering individuals and communities to overcome challenges and reach their full potential."
      ></FullWidthSection>

      {data?.map((datum: any) => {
        return (
          <div key={datum.id}>
            <StyledSection
              title={datum.attributes["Title"]}
              subphrase="The Zhai Foundation initiative on education aims to improve access to quality education for disadvantaged and marginalized communities. It achieves this through scholarship programs, building and renovating educational infrastructure, teacher training, and community outreach. The foundation is committed to empowering individuals and communities to reach their full potential through education."
              flipped={false}
              bgColor="rgb(243, 236, 255)"
              hasLink={true}
              link={`projects/${datum.attributes["Slug"]}`}
            >
              <Link href={`projects/${datum.attributes["Slug"]}`}>
                <Image
                  style={{ borderRadius: "5px" }}
                  alt=""
                  src={datum.attributes["Cover"]?.data?.attributes?.url}
                  // {datum.attributes["Cover"]?.data?.attributes?.url}
                  width={400}
                  height={300}
                ></Image>
              </Link>
            </StyledSection>
          </div>
        );
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_PROJECTS_URL}`
    );
    const { data }: { data: DataObjectType[] } = await res.json();
    // Pass data to the page via props
    console.log(data);
    return { props: { data } };
  } catch (error) {
    console.log(`Error from getServerSideProps: ${error}`);
  }
};
export default ProjectsPage;
