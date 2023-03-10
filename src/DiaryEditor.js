import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [status, setStatus] = useState({
    author: "",
    content: "",
    emotion: "1",
  });

  const handleChgStatus = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (status.author.length < 1) {
      alert("작성자는 한글자 이상으로 입력하세요.");
      authorInput.current.focus();
      return;
    }

    if (status.content.length < 5) {
      alert("내용은 최소 5자 이상 입력해야 합니다.");
      contentInput.current.focus();
      return;
    }

    onCreate(status.author,status.content,status.emotion);
    alert("save Success!");
  };

  return (
    <div className="DiaryEditor">
      <h2>Todays Diary</h2>
      <div>
        <input
          name="author"
          ref={authorInput}
          value={status.author}
          onChange={handleChgStatus}
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          name="content"
          ref={contentInput}
          value={status.content}
          onChange={handleChgStatus}
          placeholder="내용"
        />
      </div>
      <div>
        <select
          name="emotion"
          value={status.emotion}
          onChange={handleChgStatus}
        >
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
