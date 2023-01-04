import { useState } from "react";

function InputForm({ handleAddNote }) {
  const [task, setTask] = useState("");

  const handleClick = (e) => {
    // Prevent page from auto refreshing
    e.preventDefault();

    handleAddNote(task);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Enter the task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <button type="submit" onClick={handleClick}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
