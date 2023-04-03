import BgFullWidthSection from "@/components/BgFullWidthSection";
import Button from "@/components/Button";
import FullWidthSection from "@/components/FullWidthSection";
import Section from "@/components/Section";
import StyledSection from "@/components/StyledSection";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import React from "react";

const Initiatives = () => {
  return (
    <Layout>
      <FullWidthSection
        bgColor="purple"
        color="white"
        title="Initiatives"
        subphrase="We are a unique charity foundation that is dedicated to helping the world’s most vulnerable people. We are committed to empowering underserved communities and promoting sustainable development. We are a force to be reckoned with."
      ></FullWidthSection>

      <StyledSection
        title="Education"
        subphrase="Humility is the heartbeat of the saints. It is the virtue that conforms us most closely to Christ. In this short but deeply rich book, the great spiritual master, Thomas à Kempis, will teach you the necessity of humility and how to cultivate it, how to identify the manifestations of pride, how to elevate your mind to God, and how to pray with humility and reverence."
        flipped={false}
        bgColor="rgb(243, 236, 255)"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/ninno-jackjr-CG6Gd__QIOY-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Building CHPs Compounds"
        subphrase="Humility is the heartbeat of the saints. It is the virtue that conforms us most closely to Christ. In this short but deeply rich book, the great spiritual master, Thomas à Kempis, will teach you the necessity of humility and how to cultivate it, how to identify the manifestations of pride, how to elevate your mind to God, and how to pray with humility and reverence."
        flipped={true}
        bgColor="white"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/ninno-jackjr-CG6Gd__QIOY-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Building CHPs Compounds"
        subphrase="Humility is the heartbeat of the saints. It is the virtue that conforms us most closely to Christ. In this short but deeply rich book, the great spiritual master, Thomas à Kempis, will teach you the necessity of humility and how to cultivate it, how to identify the manifestations of pride, how to elevate your mind to God, and how to pray with humility and reverence."
        flipped={false}
        bgColor="rgb(243, 236, 255)"
        
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/ninno-jackjr-CG6Gd__QIOY-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Building CHPs Compounds"
        subphrase="Humility is the heartbeat of the saints. It is the virtue that conforms us most closely to Christ. In this short but deeply rich book, the great spiritual master, Thomas à Kempis, will teach you the necessity of humility and how to cultivate it, how to identify the manifestations of pride, how to elevate your mind to God, and how to pray with humility and reverence."
        flipped={false}
        bgColor="white"
        
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/ninno-jackjr-CG6Gd__QIOY-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <BgFullWidthSection
        color="white"
        bgColor="#2196f3"
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

export default Initiatives;
