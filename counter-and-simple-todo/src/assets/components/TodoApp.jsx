import { useRef, useState } from "react";

export function TodoApp() {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.filter(task => task.done === false);
  const completedTasks = tasks.filter(task => task.done === true);

  const addTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: crypto.randomUUID(),
        text: inputText.trim(),
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
  console.log(tasks)

  return (
    <div className="flex flex-col h-screen items-center py-5">
      <div>
        <h1 className="text-5xl font-bold">Todo App</h1>
        <div className="bg-rose-100 py-4 px-15 w-fit m-auto rounded-2xl border-solid border border-slate-800 mb-7 mt-5 shrink-0">
          <p className="text-xl">Total Tasks: {totalTasks.length}</p>
          <p className="text-xl">Completed tasks: {completedTasks.length}</p>
        </div>
        <div>
          <input
            className="border border-slate-800 border-solid rounded-sm px-2 py-1 text-lg w-sm"
            placeholder="New task"
            ref={inputRef}
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={inputText}
          />
          <button className="bg-rose-400 py-1 px-5 text-lg rounded-sm ml-3 cursor-pointer hover:bg-rose-300 transition-colors" onClick={addTask}>Add task</button>
        </div>
      </div>
      
      <div className="my-5 py-4 overflow-y-auto border rounded-2xl border-slate-800 w-2xl min-h-0 flex flex-col gap-3 scrollbar-thumb-rose-400">
        {tasks.length !== 0 ? tasks.map(task => {
          return (
            <div className="flex flex-row gap-1.5 justify-between w-lg items-center m-auto bg-rose-300 rounded-lg py-2 px-4" key={task.id} >
              <div className={`flex items-center gap-1.5 min-w-0 ${task.done === true ? "opacity-50 first:line-through" : ''}`} onClick={() => handleCheck(task.id)} >
                <input className="accent-rose-400" type="checkbox" checked={task.done === true} onChange={() => {}} />
                <label className="text-xl text-left ml-1.5">{task.text}</label>
              </div>
              <button className="bg-rose-100 py-1 px-3 rounded-lg cursor-pointer hover:bg-rose-200 transition-colors shrink-0" onClick={() => deleteTask(task.id)}>delete task</button>
            </div>
          )
        }) : 'try typing your first task above!'}
      </div>
      
    </div>
  );
}
