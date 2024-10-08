import { useState } from "react";

export default function TodoList() {
  const [taskList, setTaskList] = useState([
    "Go to the School",
    "Eeat the dinner",
    "Take a Shower",
  ]);

  const [newTask, setNewTask] = useState("");

  function innerTaskHandller() {
    let inp_1 = document.getElementById("inp1").value;
    setNewTask(inp_1);
  }

  function addToListHandller() {
    newTask === ""
      ? console.log("Pleas Write somthing...")
      : setTaskList((t) => [...t, newTask]);
    setNewTask("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Write and Add to list..."
        onChange={innerTaskHandller}
        id="inp1"
        value={newTask}
      />
      <button onClick={addToListHandller}>Add</button>
      <ol className="">
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}
