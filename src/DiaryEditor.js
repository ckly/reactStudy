import { useState } from "react";
const DiaryEditor = () => {
  const [status,setStatus] = useState({
    author : "",
    content : "",
    emotion : "",
  });  

  const handleChgStatus = (e)=>{
    setStatus({
        ...status,
        [e.target.name] : e.target.value,
    });
  };
const handleSubmit = ()=>{
  console.log(status);
  alert("save Success!")
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
      <div>
        <select name="emotion" value={status.emotion} onChange={handleChgStatus}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>SAVE</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
