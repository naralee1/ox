import React, { useState } from "react";
import "./App.css";

const quest = [
  { q: "1. 미국의 수도는 뉴욕이다. (o/x)", a: "x" },
  { q: "2. 세종대왕은 조선 4대 왕이다. (o/x)", a: "o" },
  { q: "3. 세계에서 가장 넓은 나라는 중국이다 (o/x)", a: "x" },
  { q: "4. 부부는 1촌이다", a: "x" },
  { q: "5. 우리나라는 반도다 ", a: "o" },
];
//퀴즈 질문과 답을 담은 배열

function App() {
  const [now, setNow] = useState(0); //현재 질문의 인덱스와 업데이트할 함수
  const [score, setScore] = useState(0); //사용자의 점수와 이를 업데이트할 함수

  const handleAnswer = (학생) => {
    const correct = quest[now].a; //현재질문의 정답을 가져온다

    if (학생 === correct) {
      //사용자의 답변이 정답과 일치하면 점수를1증가
      setScore(score + 1);
    }
    if (now < quest.length - 1) {
      //현재질문이 마지막질문이 아니면 다음질문으로 이동
      setNow(now + 1);
    } else {
      //현재질문이 마지막질문이면 퀴즈종료알림창
      const message = `퀴즈가 종료되었습니다. 점수: ${score * 25} 점`;
      alert(message);
      setNow(0);
      setScore(0);
    }
  };
  return (
    <div>
      <h1>ox 퀴즈</h1>
      <p>{quest[now].q}</p>
      <button onClick={() => handleAnswer("o")}>ㅇ</button>
      <button onClick={() => handleAnswer("x")}>×</button>
    </div>
  );
}

export default App;
