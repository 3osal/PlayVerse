import { PiMonitorFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { FaHome, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { SiGogdotcom } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export const SIDEBAR_DATA = [
    {
        id : 0,
        icon : <AiFillHome />,
        path : '/',
        label : 'home',
    },
    {
        id : 1,
        icon : <FaSteam />,
        path : '/steam',
        label : 'steam',
    },
    {
        id : 2,
        icon : <SiEpicgames />,
        path : '/epic',
        label : 'epic',
    },
    {
        id : 3,
        icon : <SiGogdotcom />,
        path : '/gog',
        label : 'gog',
    },
    {
        id : 4,
        icon : <FaXbox />,
        path : '/xbox',
        label : 'xbox',
    },
    {
        id : 5,
        icon : <FaPlaystation />,
        path : '/ps4',
        label : 'ps4',
    },
    {
        id : 6,
        icon : <BsNintendoSwitch />,
        path : '/nintendo',
        label : 'nintendo',
    },
    {
        id : 7,
        icon : <FaAndroid />,
        path : '/android',
        label : 'android',
    },
    {
        id : 8,
        icon : <FaApple />,
        path : '/apple',
        label : 'apple',
    },
]