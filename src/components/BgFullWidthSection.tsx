import styles from "@/styles/BgFullWidthSection.module.css";
import IconTextComponent from "./IconTextComponent";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

const FullWidthSection = ({
  title,
  subtitle,
  subphrase,
  component,
  bgColor,
  bgImage,
  iconSet,
  children,
  color,
}: {
  title?: string;
  subtitle?: string;
  subphrase?: string;
  component?: ReactElement;
  bgColor?: string;
  bgImage?: string;
  iconSet?: ReactElement[];
  children?: ReactNode;
  color?: string;
}) => {
  return (
    <div className={styles.container}>
    <div className={styles.overlay}></div>
    <div
      className={styles.section}
      style={{
        backgroundColor: bgColor,
        color: color,
        backgroundImage: `url(${bgImage})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >

        <div className={styles.textDisplay}>
          <h4 style={{ color }}>{title}</h4>
          <h6 style={{ color }}>{subtitle}</h6>
          <p style={{ color }}>{subphrase}</p>
        </div>

        <div className={styles.icons}>{component}</div>
        <div className={styles.icons}>
          {iconSet?.map((iconText, i) => {
            return (
              <IconTextComponent
                key={i}
                title={iconText.props.title}
                icon={iconText.props.icon}
                text={iconText.props.text}
              />
            );
          })}
        </div>
        {children}
 
    </div>
    </div>
  );
};

export default FullWidthSection;
