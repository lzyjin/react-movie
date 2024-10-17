import {useEffect, useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    if(toDo === "") {
      return;
    }

    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };

  console.log(toDos);

  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form action="" onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder={"write your todo"}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {
          toDos.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
