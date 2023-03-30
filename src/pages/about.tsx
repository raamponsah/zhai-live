import FullWidthSection from "@/components/FullWidthSection";
import GridProfileList from "@/components/GridProfileList";
import Profile from "@/components/Profile";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <Layout>
      <FullWidthSection
        title="Unique Charity Foundation"
        subtitle="We are a unique charity foundation that is dedicated to helping the world’s most vulnerable people. We are committed to empowering underserved communities and promoting sustainable development. We are a force to be reckoned with."
        subphrase="Zhai Foundation is a beacon of hope and progress in the world of philanthropy. With a steadfast commitment to empowering underserved communities and promoting sustainable development, Zhai Foundation is a force to be reckoned with. Through innovative programs and strategic partnerships, they are making a tangible difference in the lives of people around the globe. Their unwavering dedication to social justice and environmental stewardship is an inspiration to us all. Zhai Foundation is truly a game-changer, and their impact will be felt for generations to come."
      ></FullWidthSection>

      <FullWidthSection title="Who We are" bgColor="white">
        <div>
        <GridProfileList/> 
        </div>
      </FullWidthSection>
    </Layout>
  );
};

export default About;
