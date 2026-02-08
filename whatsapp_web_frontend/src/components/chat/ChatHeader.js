import React from 'react';
import { translate } from '../../utils/i18n';

/**
 * ChatHeader component - displays contact info and actions
 * @param {Object} props - Component props
 * @param {Object} props.contact - Contact information
 * @param {Function} props.onToggleDetails - Callback to toggle details panel
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function ChatHeader({ contact, onToggleDetails, language }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-background dark:bg-dark-background border-b border-gray-200 dark:border-dark-border">
      {/* Contact info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-gray-100 dark:from-dark-primary/20 dark:to-dark-border flex items-center justify-center text-xl shadow-sm">
          {contact.avatar}
        </div>
        <div>
          <h3 className="font-semibold text-text dark:text-dark-text text-sm">{contact.name}</h3>
          <p className="text-xs text-secondary dark:text-dark-secondary">
            {translate(contact.status, language)}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full transition-colors text-primary dark:text-dark-text"
          aria-label={translate('searchInChat', language)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button
          onClick={onToggleDetails}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full transition-colors text-primary dark:text-dark-text"
          aria-label={translate('contactInfo', language)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full transition-colors text-primary dark:text-dark-text"
          aria-label={translate('moreOptions', language)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
