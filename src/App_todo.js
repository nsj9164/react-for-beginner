import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...toDos]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        {/* form이 submit이라는 이벤트를 갖고 있다 */}
        <button>Add To Do</button>
      </form>
      <hr />

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
