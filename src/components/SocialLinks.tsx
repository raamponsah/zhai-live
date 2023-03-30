import Link from "next/link";
import Icon from "./Icon";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const links = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/zhaifoundation",
    icon: <AiFillFacebook color="gray" size='2em'/>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/zhaifoundation",
    icon: <AiFillTwitterSquare color="gray" size='2em'/>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zhaifoundation/",
    icon: <AiFillInstagram color="gray" size='2em'/>,
  },
];

const SocialLinks = () => {
  return (
    <div className="">
      {links.map((link, index) => (
        <Link href={link.link} key={index}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
