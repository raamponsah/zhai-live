import styles from "@/styles/StyledSection.module.css";
import { ReactElement, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  flipped = false,
  hasLink = false,
  link,
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
  hasLink?: boolean;
  link?: string | null | "";
}) => {
  return (
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
        flexDirection: flipped ? "row-reverse" : "row",
        // marginTop:"50px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.textDisplay}
      >
        <h4 style={{ color }}><Link href={link || ""} style={{textDecoration:"none", color:"purple", fontSize:"36px"}}>{title}</Link></h4>
        <h6 style={{ color }}>{subtitle}</h6>
        <p style={{ color }}>{subphrase}</p>
        {hasLink && (
          <Link className={styles.link} href={link || ""}>
            Learn more
          </Link>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.75, duration: 1 }}
        className={styles.sidekick}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StyledSection;
