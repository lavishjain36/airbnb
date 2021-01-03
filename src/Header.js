import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/56/00/dd/5600ddbbc680a4a100e62077d90763eb.jpg"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input placeholder="Start your Search" type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <ExpandMoreIcon />
        <LanguageIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
