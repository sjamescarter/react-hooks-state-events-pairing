import { useState } from "react"
import Button from "./Button"
import Comment from "./Comment"

function CommentSection({ commentList }) {
    const [comments, setComments] = useState(true)

    const displayComments = commentList.map((com) => <Comment user={com.user} commentText={com.comment}/>)
    

    console.log(comments)
    return (
        <div>        
            <h2>2 Comments</h2>
            <Button displayText={comments ? "Hide Comments" : "Show Comments"} handler={() => setComments(!comments)} />
            <div>{comments ? displayComments : null}</div>
        </div>
    )
}

export default CommentSection