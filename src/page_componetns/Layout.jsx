import React from 'react'
import HeaderMain from './Header.jsx'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
  <>
  <HeaderMain></HeaderMain>
    <Outlet></Outlet>
  <Footer></Footer>
  </>
  )
}

export default Layout