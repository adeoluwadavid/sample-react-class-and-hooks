import React, { useState } from "react";
import Post from "./Post";
export default function UseEffectCleanUp() {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>This is USE EFFECT LAYOUT</h1>
      <button onClick={showPost}>Show Posts</button>
      {show && <Post />}
    </div>
  );
}
