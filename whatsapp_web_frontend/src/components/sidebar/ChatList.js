import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatListItem from './ChatListItem';
import SearchBar from '../common/SearchBar';
import LanguageSelector from '../common/LanguageSelector';
import { translate } from '../../utils/i18n';

/**
 * ChatList component - displays list of all chats with search functionality
 * @param {Object} props - Component props
 * @param {Array} props.chats - Array of chat objects
 * @param {string} props.activeChat - ID of currently active chat
 * @param {Function} props.onChatSelect - Callback when a chat is selected
 * @param {Object} props.currentUser - Current user object for profile navigation
 * @param {string} props.language - Current language code
 * @param {Function} props.onLanguageChange - Callback when language changes
 */
// PUBLIC_INTERFACE
function ChatList({ chats, activeChat, onChatSelect, currentUser, language, onLanguageChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter chats based on search query
  const filteredChats = chats.filter((chat) => {
    const query = searchQuery.toLowerCase();
    return (
      chat.contact.name.toLowerCase().includes(query) ||
      chat.lastMessage.toLowerCase().includes(query)
    );
  });

  /**
   * Navigate to profile page
   */
  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={handleProfileClick}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-gray-100 flex items-center justify-center text-xl shadow-sm hover:shadow-md transition-shadow"
            aria-label="Open profile"
            title="Profile"
          >
            {currentUser?.avatar || '😊'}
          </button>
          <h2 className="text-lg font-semibold text-text">{translate('chats', language)}</h2>
        </div>
        <div className="flex gap-2">
          <LanguageSelector onLanguageChange={onLanguageChange} />
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={translate('newChat', language)}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={translate('menu', language)}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} language={language} />

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isActive={activeChat === chat.id}
              onClick={() => onChatSelect(chat.id)}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-secondary">
            <p>{translate('noChatsFound', language)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatList;
