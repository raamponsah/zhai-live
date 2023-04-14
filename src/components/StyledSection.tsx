import styles from "@/styles/StyledSection.module.css";
import IconTextComponent from "./IconTextComponent";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";
import { useScroll, animated } from '@react-spring/web'

const StyledSection = ({
  title,
  subtitle,
  subphrase,
  component,
  bgColor,
  bgImage,
  iconSet,
  children,
  color,
  flipped=false,
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
  flipped?: boolean;
}) => {

  const { scrollYProgress } = useScroll()
  return (

    <animated.div
      
      className={styles.section}
      style={{
        backgroundColor: bgColor,
        color: color,
        backgroundImage: `url(${bgImage})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
       flexDirection: flipped?"row-reverse":"row",
       opacity:scrollYProgress
      }}

    >


        
      <div className={styles.textDisplay}>
        <h4 style={{ color }}>{title}</h4>
        <h6 style={{ color }}>{subtitle}</h6>
        <p style={{ color }}>{subphrase}</p>
      </div>

      <div className={styles.sidekick}>{children}</div>
    </animated.div>
  );
};

export default StyledSection;
