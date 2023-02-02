function Info({ title, views, date }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} views | Uploaded {date}</p>
        </div>
    );
}

export default Info