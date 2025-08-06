import React, { useState } from 'react';

const ResponseDisplay = ({ text }) => {
  const [liked, setLiked] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="response-box">
      <p>{text}</p>
      <div className="actions">
        <button onClick={copyText}>📋 Copy</button>
        <button onClick={() => setLiked(!liked)}>
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  );
};

export default ResponseDisplay;
