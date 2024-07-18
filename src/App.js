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

      {/* <button onClick={()=>{
        let newTitle = [...title];
        newTitle[0] = "남자 코트 추천";
        setTitle(newTitle);
      }}>btn</button>

      {title.map((q, i)=>{
        return(
          <div className="list" key={q}>
            <h4>{q}
              <span onClick={()=>{
                let newLike = [...like];
                newLike[i] += 1;
                setLike(newLike);
              }}>👍</span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        )
      })} */}


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

    </div>
  );
}

export default App;
