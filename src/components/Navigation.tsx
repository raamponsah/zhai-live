import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
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

const Navigation = () => {
  
  return (
    <>
      <nav className={styles.navigation}>
        <div id={styles.logo}>
          <Link href='/' className={styles.homeLink}>
          <Image width={64} height={64} alt='zhai-logo' src='/images/zhai-logo.png' />
        <h1 className={styles.logo}><span style={{color:'palevioletred'}}>Zhai</span> Foundation</h1>
        
          </Link>
        
        
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.hamburger} onClick={()=>{console.log('clicked')}}>
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

        <Link href="" className={styles.ctaButton}>
          <span>Donate</span>
        </Link>

      
      </nav>
    </>
  );
};

export default Navigation;
