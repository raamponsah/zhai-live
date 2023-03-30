import Image from "next/image";
import styles from '@/styles/Section.module.css'
type SectionProps = {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  direction?: string;
};

const Section = ({ title, subtitle, text, image, direction }: SectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionImage}>
        <Image alt="" fill src={image} />
        

      </div>

      <div className={styles.sectionText}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>
          {text}
        </p>


      </div>
    </section>
  );
};

export default Section;
