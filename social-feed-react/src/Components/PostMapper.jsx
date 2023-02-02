import React from 'react';
import PostPresenter from './PostPresenter';

// Takes in the array as props from App

const PostMapper = (props) => {
    return ( 
        <ol>
            {props.posts.map(el => <li>{el.name}</li>)}
        </ol>
     );
}
 
export default PostMapper;