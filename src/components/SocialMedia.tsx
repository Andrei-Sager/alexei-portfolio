import { useEffect, useState } from 'react';
import { SocialMediaLinks as links } from '../constants';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'

type LinkProps =  {
    hidden?: boolean;
    dark?: boolean;
}


export default function SocialMediaLinks( { hidden, dark }:LinkProps )  {
    const iconSize = 30;
    const [isHidden, setHidden] = useState("");
    const [isDark, setDark] = useState("");

    useEffect(() => {
        setDark(!dark ? "text-neutral-3 " : "text-white")
        setHidden(!hidden ? "flex flex-row gap-4 justify-center w-full md:w-fit" : "flex flex-row gap-4 justify-center w-full md:w-fit invisible");
    }, []);

    return(
        <div className={isDark}>
            <ul className={isHidden}>
                <li className='flex justify-center items-center hover:text-instagram hover:brightness-125'>
                    <a target="_blank" 
                        href={links[0].url}>
                        <BsInstagram size={iconSize}/>
                    </a>
                </li>
                <li className='flex justify-center items-center hover:text-facebook hover:brightness-125'>
                    <a target="_blank" 
                        href={links[1].url}>
                        <BsFacebook size={iconSize}/>
                    </a>
                </li>
                <li className='flex justify-center items-center hover:text-linkedin hover:brightness-125'>
                    <a target="_blank" 
                        href={links[2].url}>
                        <ImLinkedin size={iconSize}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}