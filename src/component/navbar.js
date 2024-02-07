import './styles/navbar.css';
import logo from '../assets/logo.png'
import {BsCalendarDate} from 'react-icons/bs'
import {BsFolderSymlink} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsGraphUpArrow} from 'react-icons/bs'
import {FaHome , FaBars , FaTimes } from 'react-icons/fa'
import profile from '../assets/profile.jpg'

import { useRef } from 'react';
import {  Link, useMatch, useResolvedPath } from "react-router-dom";
function Navbar(){
   const navRef = useRef();
 const showNavBar =() =>{
         navRef.current.classList.toggle("responsive-nav");
   }
    return (
      
      <div className='nav' >
        <div className='logo'>
          <img className='logo-pic' src={logo}></img>
        </div>
        <div className='nav-contain'  >
        <nav  ref={navRef}>
          
          <span ><CustomLink   to="/"><FaHome className='a' /> </CustomLink></span>
          <span className='b'><CustomLink  to="/calender"> <BsCalendarDate /> </CustomLink></span>
          <span className='c'><CustomLink to="/todo"><BsFolderSymlink /> </CustomLink></span>
          <span className='d'><CustomLink to="/weekly"> <BsGraphUpArrow /> </CustomLink></span>
          <span className='e'><CustomLink to="/monthly"><AiOutlinePieChart /> </CustomLink></span>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>< FaTimes/></button>
        </nav>
        <button className='nav-btn' onClick={showNavBar}>< FaBars/></button>
        <div className='log'>
          <button className='login-btn' ><CustomLink to="/input">Ur Account <img className='img-navbar' src={profile}></img></CustomLink></button>
        </div>
        </div>
        
       
      </div>
      
    );
    };
    
    function CustomLink({ to , children }){
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path : resolvedPath.pathname, end :true })
         

      return (
        <span className={ isActive ? "active" :""}>
<Link to={ to} > {children}</Link>
        
        </span>
          
      )

    }
  

  export default Navbar;

  