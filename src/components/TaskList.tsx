import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, removeTask, updateTask }) => {
  if (!tasks.length) return null;

  return (
    <ul id="main">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;