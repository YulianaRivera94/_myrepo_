import React from 'react';

interface FooterProps {
  tasksLeft: number;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ tasksLeft, clearCompleted }) => {
  return (
    <footer id="footer">
      <span>
        <strong>{tasksLeft}</strong> {tasksLeft === 1 ? 'item' : 'items'} left
      </span>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;