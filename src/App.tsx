import { useState, useRef } from 'react';
import './App.css';

const HighlightedInput = () => {
  const [inputValue, setInputValue] = useState('');
  const highlightRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // ここで入力値をチェックし、ハイライトするテキストを生成します
  const getHighlightedText = () => {
    const parts = inputValue.split('hogehoge');
    return (
      <div className="highlight-background">
        {parts.map((part, index) => 
          index < parts.length - 1 ? <span key={index}>{part}<span className="highlight">hogehoge</span></span> : <span key={index}>{part}</span>
        )}
      </div>
    );
  };

  return (
    <div className="input-highlight-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="transparent-input"
      />
      <div ref={highlightRef} className="highlight-container">
        {getHighlightedText()}
      </div>
    </div>
  );
};

export default HighlightedInput;
