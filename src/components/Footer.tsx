import Link from "next/link";
import styles from "@/styles/FooterNavigation.module.css";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import FooterNavigation from "./FooterNavigation";
const navItems = [
  {
    name: "Initiatives",
    link: "/",
  },
  {
    name: "Founder",
    link: "/founder",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const FooterNav = () => {
  return (
    <>
   <FooterNavigation/>
    </>
  );
};

export default FooterNav;
