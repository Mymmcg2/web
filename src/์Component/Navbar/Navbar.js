import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import {Dropdown,Dropdown2,Dropdown3,Dropdown4} from './Dropdown'
// import Dropdown2 from './Dropdown2';
// import Dropdown3 from './Dropdown3';


function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);
    const [dropdown2,setDropdown2] = useState(false);
    const [dropdown3,setDropdown3] = useState(false);
    const [dropdown4,setDropdown4] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
            
        }else{
            setDropdown(true);
            
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
           
        }else{
            setDropdown(false);
            
        }
    };

    const onMouseEnter2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false);
            
        }else{
            setDropdown2(true);
            
        }
    };
    const onMouseLeave2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false);
           
        }else{
            setDropdown2(false);
            
        }
    };

    const onMouseEnter3 = () => {
        if(window.innerWidth < 960){
            setDropdown3(false);
            
        }else{
            setDropdown3(true);
            
        }
    };
    const onMouseLeave3 = () => {
        if(window.innerWidth < 960){
            setDropdown3(false);
           
        }else{
            setDropdown3(false);
            
        }
    };

    const onMouseEnter4 = () => {
        if(window.innerWidth < 960){
            setDropdown4(false);
            
        }else{
            setDropdown4(true);
            
        }
    };
    const onMouseLeave4 = () => {
        if(window.innerWidth < 960){
            setDropdown4(false);
           
        }else{
            setDropdown4(false);
            
        }
    };

   

    return(
        <div>
            <nav className='Navbar'>
                <Link to='/' className='navbar-logo'>
                    NUMERICAL
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link> 
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/RootofEquation' className='nav-links' onClick={closeMobileMenu}>
                            Root of Equation <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown />} 
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <Link to='/LinearAlgebra' className='nav-links' onClick={closeMobileMenu}>
                            Root of Linear Algebra <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown2 && <Dropdown2 />} 
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                        <Link to='/Interpolation' className='nav-links' onClick={closeMobileMenu}>
                            Interpolation <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown3 && <Dropdown3 />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
                        <Link to='/LeastSquaresRegression' className='nav-links' onClick={closeMobileMenu}>
                            Least Squares Regression <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown4 && <Dropdown4 />}
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar;