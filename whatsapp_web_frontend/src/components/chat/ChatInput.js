import React, { useState } from 'react';
import { translate } from '../../utils/i18n';

/**
 * ChatInput component - message composition area
 * @param {Object} props - Component props
 * @param {Function} props.onSendMessage - Callback when message is sent
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function ChatInput({ onSendMessage, language }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="px-4 py-3 bg-white border-t border-gray-200">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        {/* Emoji button placeholder */}
        <button
          type="button"
          className="p-2 text-secondary hover:text-primary transition-colors flex-shrink-0"
          aria-label={translate('addEmoji', language)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        {/* Attachment button placeholder */}
        <button
          type="button"
          className="p-2 text-secondary hover:text-primary transition-colors flex-shrink-0"
          aria-label={translate('attachFile', language)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>

        {/* Text input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={translate('typeMessage', language)}
          rows="1"
          className="flex-1 px-4 py-2 bg-background border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
          aria-label={translate('typeMessage', language)}
        />

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-2 rounded-full transition-all flex-shrink-0 ${
            message.trim()
              ? 'bg-success text-white hover:bg-success/90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label={translate('sendMessage', language)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
