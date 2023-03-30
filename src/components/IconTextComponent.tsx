import styles from "@/styles/IconTextComponent.module.css";
import { ReactElement } from "react";
import { BiHappyAlt } from "react-icons/bi";

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
    <div className={styles.iconText}>
      {icon}

      <div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default IconTextComponent;
