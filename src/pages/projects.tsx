import FullWidthSection from "@/components/BgFullWidthSection";
import Navigation from "@/components/Navigation";
import React from "react";
import { DataObjectType } from "./news/[slug]";

const ProjectsPage = ({data}:{data:any}) => {
  console.log(data)
  return (
    <>
      <Navigation></Navigation>
      <FullWidthSection
        color="white"
        title="Projects"
        subphrase="The Zhai Foundation focuses on several causes aimed at improving the lives of disadvantaged and marginalized communities in Africa. These include education, health, widowhood support, and orphanage support. The foundation provides educational opportunities, healthcare services, and support to widows and orphans to help them achieve a better quality of life. The Zhai Foundation is committed to empowering individuals and communities to overcome challenges and reach their full potential."
      ></FullWidthSection>

      {
        
      }
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
    return { props: { data } };
  } catch (error) {
    console.log(`Error from getServerSideProps: ${error}`);
  }
};
export default ProjectsPage;
