/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["여자 코트 추천", "남자 바지 추천", "예쁜 양말"]);
  let [like, setLike] = useState(0);
  // let [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: "#fff", fontSize: 18}}>Blog</h4>
      </div>

      <button onClick={()=>{
        let sortedTitle1 = [...title];
        sortedTitle1.sort();
        setTitle(sortedTitle1);
      }}>오름차순 정렬</button>

      <button onClick={()=>{
        let sortedTitle2 = [...title];
        sortedTitle2.sort(function(a, b){
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        });
        setTitle(sortedTitle2);
      }}>내림차순 정렬</button>

      <div className="list">
        <button onClick={()=>{
          let newTitle = [...title];
          newTitle[0] = "남자 코트 추천";
          setTitle(newTitle);
        }}>버튼</button>
        <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
