import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import '../assets/styles/Navbar.css';

import {
    FaPhone, FaFacebook, FaTwitter, FaInstagram, FaSearch, FaUser
} from 'react-icons/fa';
  
class Navbar extends Component {
    
    GetNavLinks = () => {
        const linkDetails = [
            { linkName: 'Home', linkAddress: '/' },
            { linkName: 'About Us', linkAddress: '/' },
            { linkName: 'Services', linkAddress: '/' },
            { linkName: 'Doctors', linkAddress: '/' },
            { linkName: 'Appointments', linkAddress: '/' },
        ];
        let links = [];

        linkDetails.map((link, index) => {
            links.push(
            <Link  key={index} to={link.linkAddress} className="text-style" >
                {link.linkName}
            </Link>
            )
        })
        return links;
    }
    render(){
        return (
            <div className='navbar'>
                    <div className='nav-brand-info flex-center'>
                        <div className="nav-brand-trademark flex-center">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                            <h1 className='nav-brand-title'>Outpatient Management System</h1>
                        </div>
                        <div className="nav-brand-contact flex-center">
                            <div className="nav-brand-phone text-style">
                                <h4>
                                    Call Us 24/7
                                </h4>
                                +977-9821129864
                                <FaPhone className='phone-icon' />
                            </div>
                            <div className="nav-brand-socials text-style">
                                <h4>Socials</h4>
                                <div className="icons-container">
                                    <Link to='/Instagram' >  <FaInstagram />  </Link>
                                    <Link to='/Twitter' >  <FaTwitter />  </Link>
                                    <Link to='/Facebook' >  <FaFacebook />  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav flex-center">
                        <div className="navbar-links">
                            {this.GetNavLinks()}
                        </div>
                        <div className="navbar-profile">
                            <input type="text" className='search-box text-style' 
                                    placeholder='Enter your keywords...' />

                            <FaSearch className='search-icon text-style' />

                            <Link to='/login' className='navLink'>
                                <FaUser className='profile-icon text-style' />
                            </Link>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Navbar;
