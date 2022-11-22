import React, { useState } from 'react';
import { close, logo, menu } from '../../..';
import './Menu.css'

const Menu = () => {
    const navLinks = ["Home", "About Us", "Features", "Solution"];
    const [menuBar,setMenuBar]  = useState(false)


    return (
        <div className='container'>
            <header>
                <nav className='d-flex justify-content-between align-items-center'>
                    <div className="logo">
                        <img className='logo' src={logo} alt="" />
                    </div>

                    <div className="d-md-none">
                    {

                        }
                        <img src={menuBar ? close : menu} alt="" onClick={()=>setMenuBar(!menuBar)} />

                        {
                            menuBar &&
                             <div className="sm-menu">
                             <ul>
                                 {
                                     navLinks.map(x =>
                                         <li className='menu-item'><a className='menu-link' onClick={()=>setMenuBar(!menuBar)} href={"#" + x}>{x}</a></li>
                                     )
     
     
                                 }
                             </ul>
                         </div>
                        }
                        
                    </div>

                    <div className="menu">
                        <ul>
                            {
                                navLinks.map(x =>
                                    <li className='menu-item'><a className='menu-link' href={"#" + x}>{x}</a></li>
                                )


                            }
                        </ul>
                    </div>

                </nav>
            </header>
        </div>
    );
};

export default Menu;