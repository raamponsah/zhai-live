import Button from "@/components/Button";
import FullWidthSection from "@/components/FullWidthSection";
import BgFullWidthSection from "@/components/BgFullWidthSection";

import GridNewsList from "@/components/GridNewsList";
import NewsItemComponent from "@/components/NewsItemComponent";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { DataObjectType } from "./news/[slug]";

const News = ({ data }: { data: DataObjectType[] }) => {
  console.log(data);
  return (
    <Layout>
      <FullWidthSection
        title="News"
        subtitle="Updates and Articles about ZHAI"
        bgColor="purple"
        color="white"
      ></FullWidthSection>

      <FullWidthSection bgColor="white">
        <section>
          <GridNewsList data={data} />
        </section>
      </FullWidthSection>

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

export default News;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);
  const { data }: { data: DataObjectType[] } = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
