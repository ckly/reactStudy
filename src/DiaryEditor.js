import { useState } from "react";
const DiaryEditor = () => {
  const [status,setStatus] = useState({
    author : "",
    content : "",
  });  

  const handleChgStatus = (e)=>{
    setStatus({
        ...status,
        [e.target.name] : e.target.value,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>Todays Diary</h2>
      <div>
        <input name="author"
          value={status.author}
          onChange={handleChgStatus}
        />
      </div>
      <div>
        <textarea name="content"
          value={status.content}
          onChange={handleChgStatus}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
