import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

/**
 * MessageList component - displays all messages in a conversation
 * @param {Object} props - Component props
 * @param {Array} props.messages - Array of message objects
 */
// PUBLIC_INTERFACE
function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 bg-background">
      {messages.length > 0 ? (
        <>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-secondary">
          <p>No messages yet. Start the conversation!</p>
        </div>
      )}
    </div>
  );
}

export default MessageList;
