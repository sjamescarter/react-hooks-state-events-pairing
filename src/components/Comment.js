function Comment({ user, commentText }) {
    return (
        <>
            <h3>{user}</h3>
            <p>{commentText}</p>
        </>
    )
}

export default Comment