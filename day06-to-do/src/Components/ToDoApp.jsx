import React, { useState } from 'react';
import './ToDoApp.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleEndDay = () => {
    setShowSummary(true);
  };

  const handleNewDay = () => {
    setTasks([]);
    setShowSummary(false);
  };

  const completedTasks = tasks.filter(task => task.done).length;
  const progress = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <div className="todo-container">
      <h1>To-Do</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% complete</p>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.done ? 'done' : ''}>
            <span onClick={() => toggleDone(index)}>{t.text}</span>
            <button onClick={() => handleDelete(index)}>✕</button>
          </li>
        ))}
      </ul>

      <div className="button-group">
        {tasks.length > 0 && (
          <button className="end-day" onClick={handleEndDay}>End Day</button>
        )}
        <button className="new-day" onClick={handleNewDay}>Start New Day</button>
      </div>

      {showSummary && (
        <div className="summary-modal">
          <div className="summary-content">
            <h2>🎯 Summary</h2>
            <p>You completed <strong>{completedTasks}</strong> of <strong>{tasks.length}</strong> tasks today!</p>
            <button onClick={() => setShowSummary(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
