import FullWidthSection from "@/components/BgFullWidthSection";
import Navigation from "@/components/Navigation";
import StyledSection from "@/components/StyledSection";
import Image from "next/image";
import BgFullWidthSection from "@/components/BgFullWidthSection";
import Button from "@/components/Button";

const FounderPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <StyledSection
        title="ZHUANG ZIHAO BRANDON"
        subtitle="Founder, ZHAI"
        subphrase="Zhuang Zihao Brandon is the founder of the Zhai Foundation, a non-profit organization dedicated to improving the lives of disadvantaged and marginalized communities in Africa. He is a young Chinese man with a passion for supporting African youth and empowering them to reach their full potential through education, healthcare, and other forms of support. Through his work with the Zhai Foundation, Brandon has made a significant impact in the lives of many individuals and communities in Africa. His dedication to social impact and philanthropy has earned him recognition as a rising leader in the non-profit sector."
        bgColor="rgb(229 185 236 / 40%)"
      >
         <Image
          style={{ borderRadius: "5px" }}
          alt=""
          src="/images/founder-.jpeg"
          width={400}
          height={500}
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
    </>
  );
};

export default FounderPage;
