import React, { useState }from 'react'
import { Avatar } from "@material-ui/core"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import "./css/feed.css"
import { SettingsInputAntenna } from '@mui/icons-material';
import firebase from "firebase"
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice'
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const[posts, setPost] = useState([]);
    const [input, setInput] = useState();
const submitPost=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description:"This is test description",
            message:input,
            photoURL: user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
}
        useEffect(() => {
           db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
                setPost(snapshot.docs.map(doc=>({
                      id:doc.id,
                      data:doc.data()
                })))
           })
        }, [])
        console.log(posts);

    return (
        <div className="feed">
            <div className="feed_input">
            <div className="feed_form">
                <form onSubmit={submitPost}>
                    <input type="text" placeholder="Start a post" value={input} onChange={e=>SettingsInputAntenna(e.target.value)}/>
                    <input type="submit" />
                </form>
                  </div> 
                <div className="feed_options">
                    <div className="option">
                           <PhotoIcon style={{color: '#70b5f9'}}/>
                           <span>Photo</span>
                    </div>
                    <div className="option">
                           <YouTubeIcon style={{color: '#7fc15e'}}/>
                           <span>Video</span>
                    </div>
                    <div className="option">
                           <TodayIcon style={{color: '#e7a33e'}}/>
                           <span>Event</span>
                    </div>
                    <div className="option">
                           <AssignmentIcon style={{color: '#fc9295'}}/>
                           <span>Write Article</span>
                    </div>
                    
                    </div>  
                    </div>   
                    <FlipMove> 
                    {
                        posts.map(({id, data : {name, description, messsage, photoURL}})=>{
                          return  <Post name={name} description={description} message={message} photoURL={photoURL}/>
                    
                        })
                    }
                    </FlipMove>
                    

        </div>
    )
}

export default Feed
