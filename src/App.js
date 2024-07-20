/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["여자 코트 추천", "남자 바지 추천", "캐릭터 양말", "백팩 추천"]);
  let [like, setLike] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTit, setModalTit] = useState(0);
  let [input, setInput] = useState("");
  

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

      {/* 반복문 사용 */}
      {
        title.map((q, i)=>{
          return (
            <div className="list" key={q}>
              <h4 onClick={()=>{setModal(!modal); setModalTit(i);}}>
                {title[i]}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let newLike = [...like];
                  newLike[i] += 1;
                  setLike(newLike);
                }}>👍</span> {like[i]}
              </h4>
              <p>2월 17일 발행</p>

              {/* 글 삭제 */}
              <button onClick={()=>{
                let newTitle = [...title];
                newTitle.splice(i, 1);
                setTitle(newTitle);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* input */}
      <input type="text" onChange={(e)=>{
        setInput(e.target.value); 
      }}/>

      <button onClick={()=>{
        let newTitle = [...title];
        newTitle.unshift(input);
        setTitle(newTitle)
      }}>글발행</button>

      {/* <div className="list">
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
        <h4 onClick={()=>{
          // modal == true ? setModal(false) : setModal(true);
          setModal(!modal)
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // modal == true ? <Modal name={title} color={"green"}/> : null
        // modal == true ? <Modal name={title} color="orange"/> : null
        // modal == true ? <Modal modalTit={modalTit} title={title} setTitle={setTitle} color={"green"}/> : null
        // modal == true ? <Modal/> : null
        modal == true ? <Modal title={title} setTitle={setTitle} modalTit={modalTit}/> : null
      }
    </div>
  );
}

function Modal(props){
  return (
    // <div className="modal" style={{background: props.color}}>
    //   <h4>{props.name[0]}</h4>
    //   <p>날짜</p>
    //   <p>상세 내용</p>
    // </div>

    // <div className="modal">
    //   <h4>제목</h4>
    //   <p>날짜</p>
    //   <p>상세 내용</p>
    // </div>

    // <div className="modal" style={{background: props.color}}>
    //   <h4>{props.title[props.modalTit]}</h4>
    //   <p>날짜</p>
    //   <p>상세 내용</p>
    //   <button onClick={()=>{
    //     let newTitle = [...props.title];
    //     newTitle[0] = "남자 코트 추천";
    //     props.setTitle(newTitle);
    //   }}>수정</button>
    // </div>
    <div className="modal">
      <h4>{props.title[props.modalTit]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>

  )
}

export default App;
