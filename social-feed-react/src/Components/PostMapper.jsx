import React from 'react';
import PostPresenter from './PostPresenter';

// Takes in the array as props from App

const PostMapper = (props) => {
    return ( 
        <ul>
            {props.posts.map(el => <PostPresenter el={el}/>)}

        </ul>
     );
}
 
export default PostMapper;

