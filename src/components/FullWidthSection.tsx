import styles from "@/styles/FullWidthSection.module.css";
import IconTextComponent from "./IconTextComponent";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

const FullWidthSection = ({
  title,
  subtitle,
  subphrase,
  component,
  bgColor,
  iconSet,
  children,
}: {
  title?: string;
  subtitle?: string;
  subphrase?: string;
  component?: ReactElement;
  bgColor?: string;
  iconSet?: ReactElement[];
  children?: ReactNode;
}) => {
  return (
    <section className={styles.section} style={{ background: bgColor }}>
      <div className={styles.textDisplay}>
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
        <p>{subphrase}</p>
      </div>

      <div className={styles.icons}>{component}</div>
      <div className={styles.icons}>{iconSet?.map((iconText, i)=>{
        return <IconTextComponent key={i} title={iconText.props.title} icon={iconText.props.icon} text={iconText.props.text} />
      })
    }</div>
    {children}
    </section>
  );
};

export default FullWidthSection;
