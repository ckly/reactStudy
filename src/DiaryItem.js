const DiaryItem = ({onDelete, author, content, created, emotion, id})=>{
    return <div className="DiaryItem">
        <div className="info">
            <span>author : {author} | emotion : {emotion} </span>
            <br/>
            <span className="date">{new Date(created).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
        <button
        onClick={()=>{
            console.log(id);
            if(window.confirm(`${id} Delete?`)){
                onDelete(id);
            };
        }}
        >삭제하기</button>

    </div>
};

export default DiaryItem;