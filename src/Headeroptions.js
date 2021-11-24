import React from 'react'
import { useSelector } from 'react-redux'
import "./css/header.css"
import { selectUser } from './features/counter/userSlice'
import firebase from "firebase"
function Headeroptions({ Icon, title}) {


    const user = useSelector(selectUser)
    return (
        <div className="header_options">
            {
                Icon && <Icon></Icon>
            }
            {
                avatar&& <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
            }
           
            <span>{title}</span>
        </div>
    )
}

export default Headeroptions
