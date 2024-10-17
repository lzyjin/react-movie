import {useEffect, useState} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)")

    // clean up function(컴포넌트가 destroy되기 전에 실행할 함수)
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      <button onClick={onClick}>{ showing ? "Hide" : "Show" }</button>
      {
        showing ? <Hello /> : null
      }
    </div>
  );
}

export default App;
