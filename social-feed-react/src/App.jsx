import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import PostForm from "./Components/PostForm";
import PostMapper from "./Components/PostMapper";

const App = (props) => {
  const [posts, setPost] = useState([
    {
      name: "Lady",
      text: "Hello! Hope everyone has a wonderful day! :)",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Rascal",
      text: "Bark Bark",
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
