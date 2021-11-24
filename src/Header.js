import React from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import "./css/header.css";
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Header() {
    const user = useSelector(selectUser);
    console.log(user)
    return (
        <div className="header">
            <div className="header_left">
            <div className="header_logo">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
             </div>
             <div className="header_search">
               <SavedSearchIcon />
               <input type="text" placeholder="search"/>
            </div>
            </div>
            <div className="header_right">
                     <Headeroptions Icon={HomeIcon} title="Home"/>
                     <Headeroptions Icon={PeopleIcon} title="My Network"/>
                     <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                     <Headeroptions Icon={MessageIcon} title="Messaging"/>
                     <Headeroptions Icon={NotificationsIcon} title="Notification"/>
                    
            </div>
        </div>
    )
}

export default Header
