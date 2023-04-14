import ContactComponent from "@/components/ContactComponent";
import FullWidthSection from "@/components/FullWidthSection";
import MapComponent from "@/components/MapComponent";
import Layout from "@/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <FullWidthSection
        title="Contact"
        bgColor="purple"
        color="white"
      ></FullWidthSection>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        <ContactComponent></ContactComponent>
        <MapComponent />
      </section>
    </Layout>
  );
};

export default Contact;
