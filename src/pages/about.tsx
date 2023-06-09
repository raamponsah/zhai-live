import Button from "@/components/Button";
import FullWidthSection from "@/components/FullWidthSection";
import BgFullWidthSection from "@/components/BgFullWidthSection";
import GridProfileList from "@/components/GridProfileList";
import IconTextComponent from "@/components/IconTextComponent";
import Layout from "@/layouts/Layout";
import React from "react";
import { FaTheaterMasks } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdHealthAndSafety } from "react-icons/md";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
        <Head>
      <title>About | Zhai Foundation </title>
      </Head>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title="ZHAI Foundation"
        subtitle="Empowering Africa's Future"
        subphrase="Our mission is to fight for poverty, gender equality, and sustainable development in Africa. We provide food, shelter, education, and medical care to vulnerable groups in the local communities in Africa."
      ></FullWidthSection>

      <FullWidthSection
        title="What make us unique?"
        bgColor="#f3ecff"
        iconSet={[
          <IconTextComponent
            key={1}
            title="Action-Driven"
            icon={<FaTheaterMasks size="12em" color="rgb(155,81,224)" />}
            text="Reaching out to the streethawker who is willing to return to school for functional skills acquisition.              "
          />,
          <IconTextComponent
            key={1}
            title="Humanitarian Focused"
            icon={<HiAcademicCap size="12em" color="rgba(255,105,0,1)" />}
            text="Promoting quality education to reduce hunger and poverty among identified underserved communities."
          />,
          <IconTextComponent
            key={1}
            title="African Oriented"
            icon={<MdHealthAndSafety size="12em" color="#fcb900" />}
            text="Promoting quality education to reduce hunger and poverty among identified underserved communities. "
          />,
        ]}
      ></FullWidthSection>

      <FullWidthSection title="Who We are" bgColor="white">
        <div>
          <GridProfileList />
        </div>
      </FullWidthSection>

      <BgFullWidthSection
        color="white"
        bgImage="/images/ninno-jackjr-CG6Gd__QIOY-unsplash.jpg"
        title="Become a Member Today!"
        subtitle="Join our community of supporters and help us make a difference."
        subphrase="Joining Zhai Foundation is an opportunity to be a part of a powerful movement towards a more just and sustainable world. By joining Zhai, you can play an active role in creating positive change and making a meaningful impact in your community and beyond. Whether you are interested in volunteering your time and skills, making a donation, or simply spreading the word about their important work, there are many ways to get involved with Zhai. Join the Zhai community today and be a part of a brighter future for all."
      >
        <Button title="Learn More &rarr;" />
      </BgFullWidthSection>
    </Layout>
  );
};

export default About;
