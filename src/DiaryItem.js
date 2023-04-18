import React, { useEffect, useRef, useState } from "react";
const DiaryItem = ({ onEdit, onRemove, author, content, created, emotion, id }) => {
  
  const [isEdit, setIsEdit] = useState(false);
  const toggleisEdit = () => setIsEdit(!isEdit);
  const [localContent,setLocalContent] = useState(content);
  const localContentInput = useRef();
  const handleRemove = () => {
    if (window.confirm(`${id} Delete?`)) {
      onRemove(id);
    }
  };

  const handleEdit = () => {
    if(localContent.length<5){
      localContentInput.current.focus();
      return ;
    }
    if (window.confirm(`${id} Edit?`)) {
      onEdit(id,localContent);
      toggleisEdit();
    }
    
    
  };

  const handleQuitEdit = ()=>{
    setIsEdit(false);
    setLocalContent(content);
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          author : {author} | emotion : {emotion}{" "}
        </span>
        <br />
        <span className="date">{new Date(created).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit?(
            <>
                <textarea ref={localContentInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}/>
            </>
        ):(
            <>{content}</>
        )}
      </div>
      {isEdit ? 
      <>
      <button onClick={handleQuitEdit}>수정 취소</button>
      <button onClick={handleEdit}>수정 완료</button>
      </> 
      : <>
       <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleisEdit}>수정하기</button>
      </>}
      
    </div>
  );
};

export default React.memo(DiaryItem);
