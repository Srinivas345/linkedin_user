import React, { forwardRef } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef(({name, description, message, photoURL} , ref)=>{
    return (
        <div className="posts" ref={ref}>
            <div className="post_header">
                <div className="post_headerLeft">
                      <div className="post_profile_details">
                          <h3>{name}</h3>
                          <p>{description}</p>
                      </div>
                </div>
                < MoreVertIcon />

            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__footer">
                <div className="post__footer__option">
                         < ThumbUpAltIcon />
                         <span>Like</span>
                </div>
                <div className="post__footer__option">
                         < CommentIcon />
                         <span>Comment</span>
                </div>
                <div className="post__footer__option">
                         < ShareIcon />
                         <span>Share</span>
                </div>
                <div className="post__footer__option">
                         < SendIcon />
                         <span>Send</span>
                </div>
            </div>
        </div>
    )})
    


export default Post
