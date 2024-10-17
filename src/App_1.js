import {useEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  // 컴포넌트가 처음 렌더링될 때만 api를 불러오고 싶어!
  // dependencies에 아무것도 넘겨주지 않았기 때문에 -> 값이 변하는지 리액트가 지켜볼 값이 없음 -> 그래서 첫 렌더링때만 실행되는 것
  useEffect(() => {
    console.log("I run only once");
  }, []);

  // console.log("I run all the time");

  // 컴포넌트가 처음 렌더링될 때와 keyword가 바뀔 때마다 실행됌
  useEffect(() => {
      console.log("I run when 'keyword' changes.");

    // 첫 렌더링때는 검색키워드가 없으니까 검색되게 하고 싶지 않다
    if(keyword !== "" && keyword.length > 5) {
      // console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  // 키워드와 카운터 둘 중 하나라도 바뀔 때 실행됌
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <hr/>
      <input onChange={onChange} value={keyword} type="text" placeholder={"Search here..."}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
