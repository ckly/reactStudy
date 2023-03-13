import DiaryItem from "./DiaryItem";
const DiaryList = ({ onDelete, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
