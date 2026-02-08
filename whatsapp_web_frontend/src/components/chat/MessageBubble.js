import React from 'react';

/**
 * MessageBubble component - displays a single message
 * @param {Object} props - Component props
 * @param {Object} props.message - Message data
 */
// PUBLIC_INTERFACE
function MessageBubble({ message }) {
  const { text, timestamp, sent, read } = message;

  return (
    <div className={`flex mb-2 ${sent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg shadow-sm ${
          sent
            ? 'bg-success text-white rounded-br-none'
            : 'bg-white text-text rounded-bl-none border border-gray-200'
        }`}
      >
        <p className="text-sm break-words">{text}</p>
        <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
          sent ? 'text-white/80' : 'text-secondary'
        }`}>
          <span>{timestamp}</span>
          {sent && (
            <svg
              className={`w-4 h-4 ${read ? 'text-white' : 'text-white/60'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              {read && (
                <path d="M14.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 7.293-7.293a1 1 0 011.414 0z" />
              )}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
