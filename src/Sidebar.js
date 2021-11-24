import React from 'react'
import { useSelector } from 'react-redux'
import "./css/sidebar.css"
import { selectUser } from './features/counter/userSlice'
//import{ Avatar } from "@material-ui/core"
function Sidebar() {
    const user = useSelector(selectUser);
    return (
        
        <div className="sidebar">
            <div className="sidebar_profile">
                <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <div className="profile_details">
                    
                   <h4>Mahaveer Singh</h4>
                   <p>Web Developer</p>
                </div>
                <div className="profile_stats">
                    <span>Who viewed your profile</span>
                    <span className="stat_number">20</span>

                </div>
                <div className="profile_stats">
                    <span>Connection<br/><b>Grow Your Network</b></span>
                    <span className="stat_number">150</span>

                </div>
            </div>

            <div className="sidebar_recent">
                <p>Recent</p>
                <p className="hash"><span>#</span> branding</p>
                <p className="hash"><span>#</span> marketinging</p>
                <p className="hash"><span>#</span> webdevelopment</p>
                <p className="hash"><span>#</span> programming</p>
                <p className="hash"><span>#</span> reactjs</p>
                <p className="hash"><span>#</span> reduxtoolkit</p>
            </div>
            
        </div>
    )
}

export default Sidebar
