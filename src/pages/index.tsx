import FullWidthSection from "@/components/FullWidthSection";
import HomeBanner from "@/components/HomeBanner";
import IconTextComponent from "@/components/IconTextComponent";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Head from "next/head";
import { BiHappyAlt } from "react-icons/bi";
import { FaTheaterMasks, FaHeadSideMask } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { IoHelpBuoy, IoWomanSharp } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { GrRestroomWomen } from "react-icons/gr";
import FooterNav from "@/components/Footer";
import Layout from "@/layouts/Layout";


export default function Home() {
  return (
    <Layout>
 
      <main>
   
        <HomeBanner />
        <Section
          title="Breaking Barriers: Access to Education for All"
          subtitle="Building a Brighter Future: Scholarships for African Students"
          text="Access to Education for All is a ZHAI Foundation initiative aimed at increasing access to quality education across Africa. Through this program, ZHAI Foundation provides support to marginalized communities, including scholarships for deserving students who may not have the financial means to pursue their academic goals. The initiative is focused on breaking down barriers to education, ensuring that all African children have the opportunity to reach their full potential and create a brighter future for themselves and their communities."
          image="/images/annie-spratt-feU8G7E5ODI-unsplash.jpg"
          direction="row-reverse"
        />

        <FullWidthSection
          title="Empowering Africa's Future"
          subphrase="At ZHAI foundation for Africa, we are committed to empowering the continent's future by providing education, healthcare, and sustainable development initiatives. Through our programs, we are breaking down barriers, creating opportunities, and supporting self-sufficiency. Join us in creating a brighter future for African children and families."
        ></FullWidthSection>

        <FullWidthSection
          title="Our Core Values"
          bgColor="white"
          iconSet={[
            <IconTextComponent
              key={1}
              title="Orphanage Support"
              icon={<IoHelpBuoy size="12em" color="rgb(122,220,180)" />}
              text="Giving aids to the orphanages, widows and deserving widowers as well as donating to the deprived appealing for our supports."
            />,
            <IconTextComponent
              key={1}
              title="Poverty Alleviation"
              icon={<FaTheaterMasks size="12em" color="rgb(155,81,224)" />}
              text="Reaching out to the streethawker who is willing to return to school for functional skills acquisition.              "
            />,
            <IconTextComponent
              key={1}
              title="Educational Scholarship"
              icon={<HiAcademicCap size="12em" color="rgba(255,105,0,1)" />}
              text="Promoting quality education to reduce hunger and poverty among identified underserved communities."
            />,
            <IconTextComponent
              key={1}
              title="Health Scholarship"
              icon={<MdHealthAndSafety size="12em" color="#fcb900" />}
              text="Promoting quality education to reduce hunger and poverty among identified underserved communities. "
            />,
            <IconTextComponent
              key={1}
              title="Widowhood Support"
              icon={<IoWomanSharp size="12em" color="rgb(207,42,186)" />}
              text="A great support to widows in their time of trouble, widowhood support provides information and guidance on all aspects of long-term financial planning."
            />,
            <IconTextComponent
              key={1}
              title="COVID Programs"
              icon={<FaHeadSideMask size="12em" color="rgb(207,42,186)" />}
              text="Zeroing Covid and reducing cholera infections by supplying nose masks, soap, and hand sanitisers to schools"
            />,
          ]}
        ></FullWidthSection>

      </main>

    </Layout>
  );
}
