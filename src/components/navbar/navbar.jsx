import React, { useState } from 'react';
import NavbarStyle from './navbar.module.css';
import LogoPNG from '../../assets/Logo/Frame 2.svg'
import Pencil from '../../assets/navbar/Pencil.svg'
import Contact from '../../assets/navbar/Group 9.svg'


function Navbar() {
  const navbarItem = ['Home', 'Menu', 'Blog', 'Events'];
  const [item, setItems] = useState(navbarItem);

  return (
    <>
      {/* Web view  */}
      <section className={NavbarStyle.web}>
        <div className={NavbarStyle.container}>

          {/* Brand Name [Left] */}
          <div href='#' className={NavbarStyle.brandName}>

            {/* BrandLogo */}
            <div className={NavbarStyle.logo}>
              <img src={LogoPNG} alt="Logo" />
            </div>

            <div className={NavbarStyle.logoText}>Concoct</div>
          </div>

          {/* Nav Item  */}
          <ul className={NavbarStyle.navItem}>
            {item.map((item , index ) => {
              return <li key={index}><a href="#">{item}</a></li>
            })}
          </ul>

          {/* Reserv {Right} */}
          <a href="">Reservation</a>
        </div>
      </section>


      {/* Mobile View */}
      <section className={NavbarStyle.mobile}>
        <div className={NavbarStyle.container}>

          {/* Brand Name [Left] */}
          <a href='#' className={NavbarStyle.brandName}>

            {/* BrandLogo */}
            <div className={NavbarStyle.logo}>
              <img src={LogoPNG} alt="Logo" />
            </div>

            <div className={NavbarStyle.logoText}>Concoct</div>
          </a>


          {/* Contact {Right} */}
          <div className={NavbarStyle.contact}>

            <a href=""><img src={Contact} alt="Contact" /></a>

            <a href=""><img src={Pencil} alt="" /></a>
          </div>

        </div>
      </section>

    </>
  );
}

export default Navbar;
