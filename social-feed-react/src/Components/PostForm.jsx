// import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';

// Create a new post to go into app... takes userInput and the way to set UserInput
// from App as props

const PostForm = (props) => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    function onSubmit(event){

        event.preventDefault()

        const formValuesObject = {
            name: name,
            text: text,
            isLiked: false,
            isDisliked: false,
        }
         
        props.addPost(formValuesObject);

        console.log(formValuesObject);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <label>Name  </label>
            <input type='text' value={name} onChange = {(event) => setName(event.target.value)} /> <br/>
            <label>Post  </label>
            <input type='text' value={text} onChange = {(event) => setText(event.target.value)}/> <br/>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default PostForm;