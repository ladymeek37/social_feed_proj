import React from 'react';
import "./PostPresenter.css";
import likeLogo from './Assets/like-icon.png';
import dislikeLogo from './Assets/dislike-icon.png';
import { useState } from 'react';




// Takes in a single post object from PostMapper as props

const PostPresenter = (post) => {
// inactive when button not in use
// active_like when button should be green
// active_dislike when button should be red
// each of these will be different CSS classes
const [likeButtonClass, setLikeButtonClass] = useState('inactive');
const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive')

const handleLikeClick = () => {
    if (likeButtonClass === 'inactive'){
        setLikeButtonClass('active_like')
        setDislikeButtonClass('inactive')
    }else {
        setLikeButtonClass('inactive')
    }
    
}
const handleDislikeClick = () => {
    if (dislikeButtonClass === 'inactive'){
        setDislikeButtonClass('active_dislike')
        setLikeButtonClass('inactive')
    }else {
        setDislikeButtonClass('inactive')
    }
    
}

    return ( 
        <section>
            <br/>
            <ul> <strong>{post.el.name}</strong></ul>
            <br/>
            <ul> {post.el.text}</ul>
            <br/>
            <a onClick={(e) => handleLikeClick(e)}><img className ={likeButtonClass} src={likeLogo} alt= "like_icon" height="35" width="35"/></a>
            <a onClick={(e) => handleDislikeClick(e)}><img className ={dislikeButtonClass} src={dislikeLogo} alt= "dislike_icon" height="35" width="35"/></a>
        </section>
     );
}
 
export default PostPresenter;