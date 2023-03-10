import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";


function App() {
const [data,setData] = useState([]);
const dataId = useRef(0);
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
const onDelete = (targetId) =>{
  console.log(`${targetId}가 삭제됨.`);
  const newDiaryList = data.filter((it)=>it.id !==targetId);
  console.log(newDiaryList);
  setData(newDiaryList);
}
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
