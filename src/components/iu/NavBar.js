import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../iu/logo-blanco-iu.png'

import './NavBar.css';

export default function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-primary" >

      <div className="container-fluid">
        <a className='navbar-brand' href='/'> Proyecto Semillero IUD</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavLink
              className="nav-item nav-link"
              to='/register'
            >
              Registrate
            </NavLink>
          </ul>
          <div className='container'></div>
          <a className='navbar-brand' href='/#'>
            <img alt='Logo' src={logo} width={170} height="auto" />
          </a>
        </div>
      </div>
    </nav>


  )
}
