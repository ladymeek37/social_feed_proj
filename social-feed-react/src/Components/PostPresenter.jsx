import React from 'react';

// Takes in a single post object from PostMapper as props

const PostPresenter = (post) => {
    return ( 
        <div>
            <ul> {post.el.name} </ul>
            <ul> {post.el.text}</ul>
            <br/>
            <br/>
        </div>
     );
}
 
export default PostPresenter;