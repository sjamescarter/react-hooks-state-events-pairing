import { useState } from "react"
import video from "../data/video.js";
import Video from "./Video"
import Info from "./Info"
import Button from "./Button.js";
import CommentSection from "./CommentSection.js";

function App() {
  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)

  return (
    <div className="App">
      <Video src={ video.embedUrl }/>
      <Info title={ video.title } views={ video.views } date={ video.createdAt } />
      <Button displayText={`${likes} 👍`} handler={() => setLikes((likes) => likes + 1)} />
      <Button displayText={`${dislikes} 👎`} handler={() => setDislikes((dislikes) => dislikes + 1)} />
      <br></br>
      <br></br>
      <CommentSection commentList={ video.comments } />
    </div>
  );
}

export default App;
