import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { Task } from './types/Task';
import { useLocalStorage } from './Hooks/useLocalStorage';
// import './styles/app.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('mydayapp-reactjs', []);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTask.trim()) {
      const newTaskItem: Task = {
        id: Date.now().toString(),
        title: newTask.trim(),
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };
  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, title: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, title } : task))
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>MyDayApp</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleAddTask}
          autoFocus
        />
      </header>

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        updateTask={updateTask}
      />

      {tasks.length > 0 && (
        <Footer tasksLeft={pendingTasks} clearCompleted={clearCompleted} />
      )}
    </section>
  );
};

export default App;