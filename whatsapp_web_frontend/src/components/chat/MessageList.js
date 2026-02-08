import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import { translate } from '../../utils/i18n';

/**
 * MessageList component - displays all messages in a conversation
 * @param {Object} props - Component props
 * @param {Array} props.messages - Array of message objects
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function MessageList({ messages, language }) {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 bg-background dark:bg-dark-background">
      {messages.length > 0 ? (
        <>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-secondary dark:text-dark-secondary">
          <p>{translate('noMessages', language)}</p>
        </div>
      )}
    </div>
  );
}

export default MessageList;
