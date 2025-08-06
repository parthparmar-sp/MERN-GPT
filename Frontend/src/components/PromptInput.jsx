import React, { useState } from 'react';

const PromptInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Type your prompt..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      className="prompt-input"
    />
  );
};

export default PromptInput;
