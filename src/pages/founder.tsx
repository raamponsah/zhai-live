import FullWidthSection from "@/components/BgFullWidthSection";
import Navigation from "@/components/Navigation";
import StyledSection from "@/components/StyledSection";
import Image from "next/image";

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
    </>
  );
};

export default FounderPage;
