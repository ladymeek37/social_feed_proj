import React from 'react';
import PostPresenter from './PostPresenter';
import "./PostMapper.css"

// Takes in the array as props from App

const PostMapper = (props) => {
    return ( 
        <ul>
            
            {props.posts.map((el,index) => <PostPresenter key={index} el={el}/>)}

        </ul>
     );
}
 
export default PostMapper;

