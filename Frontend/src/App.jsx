import React, { useState } from 'react';
import PromptInput from './components/PromptInput';
import ResponseDisplay from './components/ResponseDisplay';
import HistorySidebar from './components/HistorySidebar';
import './styles.css';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const handleSubmit = async (input) => {
    setPrompt(input);
    setHistory(prev => [input, ...prev]);

    try {
      const res = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      console.error('API error:', err);
      setResponse('Something went wrong!');
    }
  };

  const handleSelectPrompt = (selectedPrompt) => {
    handleSubmit(selectedPrompt);
  };

  return (
    <div className="main-container">
      <HistorySidebar history={history} onSelectPrompt={handleSelectPrompt} />
      <div className="chat-section">
        <PromptInput onSubmit={handleSubmit} />
        <ResponseDisplay text={response} />
      </div>
    </div>
  );
};

export default App;
