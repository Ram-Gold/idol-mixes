import React, { useState, useRef, useEffect } from 'react';

function EditableTitle({ value, onChange, placeholder = "Enter Title...", isCapturing = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    onChange(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setInputValue(value);
      setIsEditing(false);
    }
  };

  // Force text display during capture - ensure it's captured by html2canvas
  if (isEditing && !isCapturing) {
    return (
      <div className="w-full flex justify-start">
        <input
          ref={inputRef}
          type="text"
          className="w-full text-left text-xl font-bold bg-transparent border-none focus:ring-0 p-0 text-gray-800 placeholder-gray-400 uppercase tracking-[0.2em]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full cursor-text group px-1 flex justify-start py-1 ${isCapturing ? 'pointer-events-none' : ''}`}
      onClick={() => !isCapturing && setIsEditing(true)}
    >
      {value ? (
        <h1 className="text-xl font-bold text-gray-800 uppercase tracking-[0.2em] text-left">
          {value}
        </h1>
      ) : (
        <div className={`opacity-40 transition-opacity ${isCapturing ? 'hidden' : 'group-hover:opacity-100'}`}>
          <span className="text-xl uppercase tracking-[0.2em] font-bold text-gray-400 text-left">
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}

export default EditableTitle;
