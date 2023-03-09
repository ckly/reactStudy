import { useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";


function App() {
const [data,setData] = useState([]);

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={[]} />
    </div>
  );
}

export default App;
