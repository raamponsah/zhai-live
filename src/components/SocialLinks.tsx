import Icon from "./Icon"
import { AiFillFacebook } from "react-icons/ai";

const links = [
    {name: 'Facebook', link: 'https://www.facebook.com/zhaifoundation', icon: <AiFillFacebook color='gray'/>},
    {name: 'Twitter', link: 'https://twitter.com/zhaifoundation', icon: 'twitter'},
    {name: 'Instagram', link: 'https://www.instagram.com/zhaifoundation/', icon: 'instagram'},
]


const SocialLinks = () => {
    return (
        <div className=''>
            {links.map((link, index) => (
                <a href={link.link} key={index}>
                    <Icon icon={link.icon} />
                </a>
            ))}
        </div>
    )
}