import { useMemo,useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeTest from "./OptimizeTest";


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
      id : it.id
    }
  });
  setData(initData);
};


useEffect(()=>{
  getData();
},[]);
const onCreate = (author,content,emotion)=>{
  const created = new Date().getTime();
  const newItem = {
    author,
    content,
    emotion,
    created,
    id : dataId.current
  }
  dataId.current +=1;
  setData([newItem,...data]);
};
const onRemove = (targetId) =>{
  console.log(`${targetId}가 삭제됨.`);
  const newDiaryList = data.filter((it)=>it.id !==targetId);
  //console.log(newDiaryList);
  setData(newDiaryList);
}
const onEdit = (targetId,newContent)=>{
  setData(
    data.map((it)=> it.id === targetId ? {...it, content: newContent} : it )
  );
};

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
          <OptimizeTest/>
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
