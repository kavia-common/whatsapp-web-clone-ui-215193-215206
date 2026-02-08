import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { translate } from '../../utils/i18n';

/**
 * ChatWindow component - main chat area
 * @param {Object} props - Component props
 * @param {Object} props.chat - Current chat data
 * @param {Function} props.onSendMessage - Callback when message is sent
 * @param {Function} props.onToggleDetails - Callback to toggle details panel
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function ChatWindow({ chat, onSendMessage, onToggleDetails, language }) {
  if (!chat) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-background dark:bg-dark-background text-secondary dark:text-dark-secondary">
        <svg className="w-24 h-24 mb-4 text-gray-300 dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <h2 className="text-xl font-semibold text-text dark:text-dark-text mb-2">WhatsApp Web</h2>
        <p className="text-sm text-center max-w-md">
          {translate('selectChat', language)}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader contact={chat.contact} onToggleDetails={onToggleDetails} language={language} />
      <MessageList messages={chat.messages} language={language} />
      <ChatInput onSendMessage={onSendMessage} language={language} />
    </div>
  );
}

export default ChatWindow;
