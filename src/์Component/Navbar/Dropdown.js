import React,{ useState } from 'react';
import {MenuItems,MenuItems2,MenuItems3,MenuItems4} from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export function Dropdown(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export function Dropdown2(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked2' : 'dropdown-menu2'}>
                {MenuItems2.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export function Dropdown3(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked3' : 'dropdown-menu3'}>
                {MenuItems3.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export function Dropdown4(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked4' : 'dropdown-menu4'}>
                {MenuItems4.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}