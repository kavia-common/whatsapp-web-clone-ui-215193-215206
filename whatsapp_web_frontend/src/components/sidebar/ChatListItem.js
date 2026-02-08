import React from 'react';

/**
 * ChatListItem component - displays a single chat in the sidebar
 * @param {Object} props - Component props
 * @param {Object} props.chat - Chat data
 * @param {boolean} props.isActive - Whether this chat is currently selected
 * @param {Function} props.onClick - Callback when chat is clicked
 */
// PUBLIC_INTERFACE
function ChatListItem({ chat, isActive, onClick }) {
  const { contact, lastMessage, lastMessageTime, unreadCount } = chat;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-dark-border border-b border-gray-100 dark:border-dark-border ${
        isActive ? 'bg-gray-100 dark:bg-dark-border' : 'bg-white dark:bg-dark-surface'
      }`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Chat with ${contact.name}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-gray-100 dark:from-dark-primary/20 dark:to-dark-border flex items-center justify-center text-2xl shadow-sm">
        {contact.avatar}
      </div>

      {/* Chat info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="font-semibold text-text dark:text-dark-text truncate text-sm">
            {contact.name}
          </h3>
          <span className="text-xs text-secondary dark:text-dark-secondary ml-2 flex-shrink-0">
            {lastMessageTime}
          </span>
        </div>
        <p className="text-sm text-secondary dark:text-dark-secondary truncate">
          {lastMessage}
        </p>
      </div>

      {/* Unread badge */}
      {unreadCount > 0 && (
        <div className="flex-shrink-0 w-5 h-5 bg-success dark:bg-dark-success rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-semibold">
            {unreadCount}
          </span>
        </div>
      )}
    </div>
  );
}

export default ChatListItem;
