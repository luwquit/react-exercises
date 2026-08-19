import { useRef, useState } from "react";
import './TodoApp.css'

export function TodoApp() {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.filter(task => task.done === false);
  const completedTasks = tasks.filter(task => task.done === true);

  const addTask = () => {
    if (inputText !== '') {
      const newTask = {
        id: crypto.randomUUID(),
        text: inputText,
        done: false,
      };

      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const onKeyDown = (event) => {
    event.key === "Enter" && addTask();
    event.key === "Escape" && setInputText("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const onChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCheck = (id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        task.done === false ? task.done = true : task.done = false; 
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <h2>Todo App</h2>
      <p>Total Tasks: {totalTasks.length}</p>
      <p>Completed tasks: {completedTasks.length}</p>
      <input
        placeholder="New task"
        ref={inputRef}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={inputText}
      />
      <button onClick={addTask}>Add task</button>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <div className={task.done === true ? "checked" : ''} onClick={() => handleCheck(task.id)}>
              <input type="checkbox" checked={task.done === true} onChange={() => {}} />
              <label>{task.text}</label>
            </div>
            <button onClick={() => deleteTask(task.id)}>delete task</button>
          </div>
        )
      })}
      
    </div>
  );
}
