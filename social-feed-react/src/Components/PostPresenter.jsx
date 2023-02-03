import React from 'react';
import "./PostPresenter.css"

// Takes in a single post object from PostMapper as props

const PostPresenter = (post) => {
    return ( 
        <section>
            <br/>
            <ul> <strong>{post.el.name}</strong></ul>
            <br/>
            <ul> {post.el.text}</ul>
            <br/>
        </section>
     );
}
 
export default PostPresenter;