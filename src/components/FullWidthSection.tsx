import styles from "@/styles/FullWidthSection.module.css";
import IconTextComponent from "./IconTextComponent";
import { ReactElement } from "react";

const FullWidthSection = ({
  title,
  subphrase,
  component,
  bgColor,
  iconSet,
}: {
  title?: string;
  subphrase?: string;
  component?: ReactElement;
  bgColor?: string;
  iconSet?: ReactElement[];
}) => {
  return (
    <section className={styles.section} style={{ background: bgColor }}>
      <div className={styles.textDisplay}>
        <h4>{title}</h4>
        <p>{subphrase}</p>
      </div>

      <div className={styles.icons}>{component}</div>
      <div className={styles.icons}>{iconSet?.map((iconText, i)=>{
        return <IconTextComponent key={i} title={iconText.props.title} icon={iconText.props.icon} text={iconText.props.text} />
      })
    }</div>
    </section>
  );
};

export default FullWidthSection;
