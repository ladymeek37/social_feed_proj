import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import PostForm from "./Components/PostForm";
import PostMapper from "./Components/PostMapper";

const App = (props) => {
  const [posts, setPost] = useState([
    {
      name: "Lady ",
      text: " ",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Pascal ",
      text: " ",
      isLiked: false,
      isDisliked: false,
    },
  ]);

  const addPost = (post) => {
    let tempPost = [post, ...posts];
    setPost(tempPost)

  }

  return (
    <div>
      <NavBar />
      <PostForm addPost = {addPost}/>
      <PostMapper posts = {posts}/>
    </div>
  );
};

export default App;
