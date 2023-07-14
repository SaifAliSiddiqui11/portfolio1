import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Navbar=()=>{
    return (
        <nav className="nav">
            <div className="logo-about">
                <h4>@Li</h4>
            <ul className="nav-links">
                <li><a href="www.google.com">Home</a></li>
                <li><a href="www.google.com">About</a></li>
                <li><a href="www.google.com">Services</a></li>
                <li><a href="www.google.com">works</a></li>
            </ul>
            </div>
            <ul className="social-media">
                <li><a href="www.google.com"><TwitterIcon/></a></li>
                <li><a href="www.google.com"><InstagramIcon/></a></li>
                <li><a href="www.google.com"><LinkedInIcon/></a></li>
        
            </ul>
        </nav>
    )
}
export default Navbar;