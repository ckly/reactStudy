import DiaryItem from "./DiaryItem";
const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
