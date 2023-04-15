import styles from "@/styles/FullWidthSection.module.css";
import IconTextComponent from "./IconTextComponent";
import { ReactElement, ReactNode } from "react";
import {motion} from 'framer-motion'
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
    <motion.div
    initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      className={styles.section}
      style={{
        backgroundColor: bgColor,
        color: color,
        backgroundImage: `url(${bgImage})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        // marginTop:"40px"
      }}
    >
      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}

      className={styles.textDisplay}>
        <h4 style={{ color }}>{title}</h4>
        <h6 style={{ color }}>{subtitle}</h6>
        <p style={{ color }}>{subphrase}</p>
      </motion.div>

      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:1.3,duration:1}}
      
      className={styles.icons}>
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
      </motion.div>
      <motion.div
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:1.5,duration:1}}
      >
      {children}
      </motion.div>
    </motion.div>
  );
};

export default FullWidthSection;
