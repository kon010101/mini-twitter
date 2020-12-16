import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import {Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/home"><TwitterIcon className="sidebar__twitterIcon"/></NavLink>

            <NavLink to="/home"><SidebarOption active icon={<HomeIcon />} text="Home"/></NavLink>
            <SidebarOption icon={<SearchIcon />} text="Explore"/>
            <SidebarOption icon={<NotificationsNoneIcon />} text="Notifications"/>
            <SidebarOption icon={<MailOutlineIcon />} text="Messages"/>
            <SidebarOption icon={<BookmarkBorderIcon />} text="Bookmarks"/>
            <SidebarOption icon={<ListAltIcon />} text="Lists"/>
            <NavLink to="/profile"><SidebarOption icon={<PermIdentityIcon />} text="Profile"/></NavLink>
            <SidebarOption icon={<MoreHorizIcon />} text="More"/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
