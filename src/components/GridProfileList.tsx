import React from "react";
import Profile from "./Profile";
import styles from "@/styles/GridProfileList.module.css";
const profiles = [
  {
    name: "ZHUANG ZIHAO BRANDON",
    position: "Founder & Country Director, China",
    description:
      "Zihao is the founder of ZHAI. He is a philanthropist with focus on helping people to grow.",
    src: "/images/zihao.jpg",
  },

  {
    name: "Zhuang Xa Xi Sandy",
    position: "Deputy Country Director -China        ",
    description:
      "Xi, is the leads the economical front for the various ZHAI projects and programs in China.",
    src: "/images/sandy.jpeg",
  },
  {
    name: "LU Zhiqi",
    position: "Member -China        ",
    description:
      "Lu, is a core founding member of ZHAI foundation and she contributes immensely on strategic projects in China.",
    src: "/images/lu-zhiqi.jpg",
  },

  {
    name: "John-Paul Azaonoo",
    position: "CEO & Country Director- Ghana ",
    description:
      "John-Paul cares about the suffering of the poor, especially school dropouts who survive by selling goods on the street. He is also an accomplished educationist and business administrator",
    src: "/images/director.jpeg",
  },

  {
    name: "Grace Wornyo Azaonoo",
    position: "Programme Coordinator/HR Director",
    description:
      "She is the human resource personel of ZHAI with extensive experience on NGO projects.grace",
    src: "/images/grace.jpg",
  },

  {
    name: "Daniel Kojo Adjei",
    position: "Accountant",
    description:
      "Graduated from the University of Cape Coast with a Bachelor of Education Social Science (Accounting major, Economics minor).",
    src: "/images/daniel.jpeg",
  },
  {
    name: "Prince Odum",
    position: "Accounts Officer",
    description:
      "Accounts/budget officer. He holds experience in accounting and bugdeting. He has worked on several NGO projects.",
    src: "/images/prince.jpg",
  },
  {
    name: "Florence Mawusi Dagbanu",
    position: "HR Manager",
    description:
      "A proficient, energetic, and ambitious HR Manager who has been working with the Water Resources Commission of Ghana for over seventeen years.",
    src: "/images/florence.jpeg",
  },
  {
    name: "Stephanie Anyeley Coffie",
    position: "Research Assistant",
    description:
      "As a trained research assistant, she focuses on social-work research, where she uncovers issues especially in the gender domain.",
    src: "/images/stephanie.jpeg",
  },
  {
    name: "Yaa Obeng",
    position: "Administrative Secretary",
    description:
      "She is a trained adminstrative secretary. She has an extensive experience in adminstrative duties.",
    src: "/images/yaa.jpeg",
  },
  {
    name: "Larry-Bryan Johnpauls",
    position: "Monitoring and Evaluation (M&E) Officer",
    description:
      "Larry is the M&E expert of our team ensuring all projects and programs go on according to the objectives set",
    src: "/images/larry.jpg",
  },
  {
    name: "Eyiram Celine Johnpauls",
    position: "Youth Ambassador for Zhai",
    description:
      "She is a youth ambassador for Zhai. She is a trained social worker and has worked on several NGO projects.",
    src: "/images/eyiram.jpg",
  },
  {
    name: "Henry Johnpauls",
    position: "Head - Youth Programme Planning",
    description:
      "He is responsible for designing and implementing youth empowerment programs. He brings expertise in program planning and has worked on various NGO projects.",
    src: "/images/henry.jpeg",
  },
];

const GridProfileList = () => {
  return (
    <div className={styles.profileList}>
      {profiles.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
    </div>
  );
};

export default GridProfileList;
