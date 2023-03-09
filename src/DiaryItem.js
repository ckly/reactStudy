const DiaryItem = ({author, content, created, emotion, id})=>{
    return <div className="DiaryItem">
        <div className="info">
            <span>author : {author} | emotion : {emotion} </span>
            <br/>
            <span className="date">{new Date(created).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>
};

export default DiaryItem;