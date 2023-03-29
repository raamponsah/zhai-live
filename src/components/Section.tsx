import Image from "next/image";
import styles from '@/styles/Section.module.css'
type SectionProps = {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  swapped?: boolean;
};

const Section = ({ title, subtitle, text, image }: SectionProps) => {
  return (
    <section className={styles.section} style={{flexDirection:'row-reverse'}}>
      <div className={styles.sectionText}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>
          {text}
        </p>
      </div>

      <div className={styles.sectionImage}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Section;
