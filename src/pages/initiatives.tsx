import BgFullWidthSection from "@/components/BgFullWidthSection";
import Button from "@/components/Button";
import FullWidthSection from "@/components/FullWidthSection";
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
        subphrase="The Zhai Foundation initiative on education aims to improve access to quality education for disadvantaged and marginalized communities. It achieves this through scholarship programs, building and renovating educational infrastructure, teacher training, and community outreach. The foundation is committed to empowering individuals and communities to reach their full potential through education."
        flipped={false}
        bgColor="rgb(243, 236, 255)"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Health"
        subphrase="The Zhai Foundation initiative on health aims to improve healthcare access and outcomes for disadvantaged and marginalized communities. The foundation achieves this by investing in healthcare infrastructure, providing healthcare education and training, implementing disease prevention and management programs, and addressing nutrition and food security issues in underserved communities. The foundation is committed to empowering individuals and communities to achieve better health outcomes."
        flipped={true}
        bgColor="white"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/santi-vedri-O5EMzfdxedg-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Widowhood Support"
        subphrase="The Zhai Foundation initiative on widowhood support is aimed at improving the quality of life for widows and their families. The foundation provides financial assistance, job training and employment opportunities, counseling and support services, and legal assistance to widows to help them cope with the challenges of widowhood and achieve self-sufficiency. The foundation is committed to providing comprehensive support to help widows and their families achieve a better quality of life."
        flipped={false}
        bgColor="rgb(243, 236, 255)"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/joshua-hanson-I49bIyEHaIs-unsplash.jpg"
          width={400}
          height={300}
        ></Image>
      </StyledSection>

      <StyledSection
        title="Orphanage Support"
        subphrase="The Zhai Foundation initiative on orphanage support is focused on improving the lives of orphaned and vulnerable children. The foundation achieves this by providing education and vocational training, healthcare and nutrition support, shelter and care, and counseling and support services to orphaned children. The foundation is committed to ensuring that every child has the opportunity to reach their full potential and is dedicated to providing the necessary support to make this a reality."
        flipped={true}
        bgColor="white"
      >
        <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/seth-doyle-zf9_yiAekJs-unsplash.jpg"
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
