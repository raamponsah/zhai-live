import Link from "next/link";
import styles from "@/styles/FooterNavigation.module.css";
import Image from "next/image";
const navItems = [
  {
    name: "Initiatives",
    link: "/initiatives",
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

const FooterNavigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div id={styles.logo}>
        <Image width={64} height={64} alt='zhai-logo' src='/images/zhai-logo.png' />
        <h1 className={styles.logo}><span style={{color:'palevioletred'}}>Zhai</span> Foundation</h1>
        </div>
        <p>Building an empowered Africa through Charitable acts</p>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

<p>Castle Bridge, East Adenta, Municpality &copy; 2023</p>
     

    
      
      </nav>
    </>
  );
};

export default FooterNavigation;
