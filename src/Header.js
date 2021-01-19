import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
const Header = () => {
  // const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_(2020).svg/1200px-Gmail_icon_(2020).svg.png"
          alt=""
        />
        <h3 className="tagName">Gmail</h3>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
