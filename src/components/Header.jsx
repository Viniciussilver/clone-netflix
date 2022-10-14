import React from "react"
import Logo from "../assets/logo-netflix.png"

import "./Header.css"

export const Header = ({ black }) => {
  return (
    <div className={black ? "header black" : "header"}>
      <img src={Logo} alt="logo da netflix" />
    </div>
  )
}
