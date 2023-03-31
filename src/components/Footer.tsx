import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
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
      <nav className={styles.navigation} style={{display:'flex',justifyContent:'center',alignItems:'center', margin:'0 auto' ,borderTop:'1px solid rgba(0,0,0,0.04)', maxWidth:'1200px'}}>
        <div id={styles.logo}>
          <Image
            width={64}
            height={64}
            alt="zhai-logo"
            src="/images/zhai-logo.png"
          />
          <h1 className={styles.logo}>Zhai Foundation</h1>
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className={styles.hamburger}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="24"
            width="24"
          >
            <g>
              <line
                x1="13.5"
                y1="2"
                x2="0.5"
                y2="2"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="7"
                x2="0.5"
                y2="7"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="12"
                x2="0.5"
                y2="12"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
            </g>
          </svg>
        </div>

    
        <SocialLinks />

      </nav>
    </>
  );
};

export default FooterNav;