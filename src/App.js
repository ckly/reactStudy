import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

//https://jsonplaceholder.typicode.com/comments

function App() {
const [data,setData] = useState([]);
const dataId = useRef(0);
const getData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json());
  //console.log(res);
  const initData = res.slice(0,20).map((it)=>{
    return {
      author : it.email,
      content : it.body,
      emotion : Math.floor(Math.random()*5)+1, 
      created : new Date(),
      id : dataId.current++
    }
  });
  setData(initData);
};


useEffect(()=>{
  getData();
},[]);
const onCreate = useCallback((author,content,emotion)=>{
  const created = new Date().getTime();
  const newItem = {
    author,
    content,
    emotion,
    created,
    id : dataId.current
  }
  dataId.current +=1;
  setData((data)=>[newItem,...data]);
},
[]);
const onRemove = useCallback((targetId) =>{
  console.log(`${targetId}가 삭제됨.`);  
  setData((data)=>data.filter((it)=>it.id !==targetId));
},[]);
const onEdit = useCallback((targetId,newContent)=>{
  setData((data)=>
    data.map((it)=> it.id === targetId ? {...it, content: newContent} : it )
  );
},[]);

const getDiaryAnalysis = useMemo(() =>{
 // console.log("Start Analysis!!!!!");
  const goodCount = data.filter((it)=>it.emotion>=3).length;
  const badCount = data.length- goodCount;
  const goodRatio = ( goodCount / data.length ) * 100;
  return {goodCount, badCount, goodRatio};
},[data.length]);

const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <div>All : {data.length}</div>
          <div>Good : {goodCount}</div>
          <div>Bad : {badCount}</div>
          <div>Good Rate : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
