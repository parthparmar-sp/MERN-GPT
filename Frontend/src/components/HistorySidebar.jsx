import React from 'react';

const HistorySidebar = ({ history, onSelectPrompt }) => {
  return (
    <div className="sidebar">
      <h3>Prompt History</h3>
      <ul>
        {history.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelectPrompt(item)}
            style={{ cursor: 'pointer' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySidebar;
