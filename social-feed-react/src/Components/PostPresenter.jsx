import React from 'react';

// Takes in a single post object from PostMapper as props

const PostPresenter = (post) => {
    return ( 
        <div>
            <li> {post.el.name} </li>
            <li> {post.el.text}</li>
        </div>
     );
}
 
export default PostPresenter;