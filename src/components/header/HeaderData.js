
import personIcon from '../../assets/Vector.png';
import messageIcon from "../../assets/message.png";
import heartIcon from '../../assets/heart.png';
import cardIcon from '../../assets/busket.png';

import home from "../../assets/home.svg";
import list from "../../assets/list.svg";
import heart from "../../assets/favorite_border.svg";
import order from "../../assets/inventorybar.svg";
import language from "../../assets/language.svg";
import headset from "../../assets/headset_mic.svg";
import about from "../../assets/business.svg";

const icons = [
    {
        icon:personIcon,
        title:'Profile'
    },
    {
       icon:messageIcon,
       title: 'Message'
    },
    { 
        icon:heartIcon,
        title:"Orders"
    },
    {
        icon:cardIcon,
        title:'My cart'
    }
];

export {icons};

const categories = [
    {
        title:"All category"
    },
    {
        title:"Hot offers"
    },
    {
        title:"Gift boxes"
    },
    {
        title:"Projects"
    },
    {
        title:"Menu item"
    },
    {
        title:"Help"
    },
];

export {categories}



const userMenu = [
    {   
        id:1,
        icon:home,
        title:'Home'
    },
    {
        id:2,
        icon:list,
        title:"Categories"
    },
    {  
        id:3,
        icon:heart,
        title:'Favorites'
    },
    {
        id:4,
        icon:order,
        title:"My orders"
    }
];

export {userMenu}

const userMenuAdd = [
    {
       icon:language,
       title:"English | USD"
    },
    {
        icon:headset,
        title:"Contact us"
    },
    {
        icon:about,
        title:'About'
    }
]

export {userMenuAdd}



const select = [
    {
        id:1,
        title:"main",
    },

    {
        id:2,
        title:"Clothes and wear",
    },
    {
        id:3,
        title:"Home interiros",

    },
    {
        id:4,
        title:"Computer and tech",
    },
    {
        id:5,
        title:"Tools, equipments",
    },
    {
        id:6,
        title:"Sports and outdoors",
    },
    {
        id:7,
        title:"Animal and pets",
    },
    {
        id:8,
        title:"Macinery tools",
    },
    {
        id:9,
        title:"More category"
    }
]

export{select}