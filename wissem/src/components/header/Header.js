import "./header.css"
import logo from"../../assets/logo.png"
import { FaStream } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react"
import { FiArrowRightCircle } from "react-icons/fi";
function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const [showicon, setShowicons] = useState(false);
    const activeLink = ({ isActive }) => (isActive ? "active" : "");
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowicons(!showicon)
      };
    
      const hideMenu = () => {
        setShowMenu(false)
        setShowicons(false)

      };
    return (
    
        <header className="container">
<div class="page-header">
            <div class="logo">
            <a href="/" className="nav-log">
            <img src={logo} alt="" className="nav-log-img" />
            </a>
            </div>
        
            <ul className={showMenu ? "show-nav" : "hide-nav"} onClick={hideMenu}>
                <li><NavLink  className={activeLink} to="/" >Accueil</NavLink></li>
                <li><NavLink className={activeLink}to="/no-service" >No services</NavLink></li>
                <li><NavLink className={activeLink}to="/Professionels" >Professionels</NavLink></li>
            
                <li><NavLink className={activeLink} to="/Contact" >Contact</NavLink></li>
                <li><Link to="/hello" className="button-header" >Devis en ligne</Link></li>
            </ul>
         
            
           { showicon ?
            <div className="navtog" onClick={toggleMenu}>
                    <FiArrowRightCircle  size={30} />
                    </div>
                   :
                    <div className="navtog" onClick={toggleMenu}>
                         
                        <FaStream size={22}   />  
                    </div>} 

        </div> 

</header>

    )}
 export default Header ;  