import styles from "@/styles/IconTextComponent.module.css";
import { ReactElement } from "react";
import { BiHappyAlt } from "react-icons/bi";
import { motion } from "framer-motion";
const IconTextComponent = ({
  title,
  text,
  icon,
}: {
  title?: string;
  text?: string;
  icon: ReactElement;
}) => {
  return (
    <motion.div layout
      className={styles.iconText}
      initial={{opacity:0.5}}
      whileHover={{ scale: 1.2 }}
      whileInView={{ opacity: 1 }}
 
    >
      {icon}

      <div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
      </div>
    </motion.div>
  );
};

export default IconTextComponent;
