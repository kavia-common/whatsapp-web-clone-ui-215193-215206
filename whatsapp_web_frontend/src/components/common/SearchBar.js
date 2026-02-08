import React from 'react';
import { translate } from '../../utils/i18n';

/**
 * SearchBar component for filtering chats
 * @param {Object} props - Component props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Callback when search value changes
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function SearchBar({ value, onChange, language }) {
  return (
    <div className="p-3 bg-background dark:bg-dark-background border-b border-gray-200 dark:border-dark-border">
      <div className="relative">
        <input
          type="text"
          placeholder={translate('search', language)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent text-sm transition-all text-text dark:text-dark-text placeholder-secondary dark:placeholder-dark-secondary"
          aria-label={translate('search', language)}
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary dark:text-dark-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
