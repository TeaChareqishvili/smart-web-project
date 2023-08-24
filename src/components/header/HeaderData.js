
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
        title:"Automobiles",
    },

    {
        title:"Clothes and wear",
    },
    {
        title:"Home interiros",

    },
    {
        title:"Computer and tech",
    },
    {
        title:"Tools, equipments",
    },
    {
        title:"Sports and outdoors",
    },
    {
        title:"Animal and pets",
    },
    {
        title:"Macinery tools",
    },
    {
        title:"More category"
    }
]

export{select}