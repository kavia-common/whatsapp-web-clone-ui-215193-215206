import React, { useState, useEffect } from 'react';
import { getCurrentTheme, setTheme, getEffectiveTheme, THEMES } from '../../utils/theme';

/**
 * ThemeToggle component - allows users to switch between light and dark themes
 * @param {Object} props - Component props
 * @param {Function} props.onThemeChange - Callback when theme changes
 */
// PUBLIC_INTERFACE
function ThemeToggle({ onThemeChange }) {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());
  const [effectiveTheme, setEffectiveTheme] = useState(getEffectiveTheme());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setEffectiveTheme(getEffectiveTheme());
  }, [currentTheme]);

  /**
   * Handle theme selection
   * @param {string} theme - Selected theme
   */
  const handleThemeSelect = (theme) => {
    setTheme(theme);
    setCurrentTheme(theme);
    setIsOpen(false);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  /**
   * Get icon for current effective theme
   */
  const getThemeIcon = () => {
    if (effectiveTheme === THEMES.DARK) {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  };

  return (
    <div className="relative">
      {/* Theme toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full transition-colors text-primary dark:text-dark-text"
        aria-label="Toggle theme"
        title="Theme"
      >
        {getThemeIcon()}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-surface rounded-lg shadow-xl border border-gray-200 dark:border-dark-border z-50 overflow-hidden">
            <div className="py-1">
              {/* Light theme option */}
              <button
                onClick={() => handleThemeSelect(THEMES.LIGHT)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                  currentTheme === THEMES.LIGHT
                    ? 'bg-success/10 text-success dark:bg-success/20 font-semibold'
                    : 'text-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light</span>
                {currentTheme === THEMES.LIGHT && (
                  <svg className="inline-block w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Dark theme option */}
              <button
                onClick={() => handleThemeSelect(THEMES.DARK)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                  currentTheme === THEMES.DARK
                    ? 'bg-success/10 text-success dark:bg-success/20 font-semibold'
                    : 'text-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark</span>
                {currentTheme === THEMES.DARK && (
                  <svg className="inline-block w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* System theme option */}
              <button
                onClick={() => handleThemeSelect(THEMES.SYSTEM)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                  currentTheme === THEMES.SYSTEM
                    ? 'bg-success/10 text-success dark:bg-success/20 font-semibold'
                    : 'text-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>System</span>
                {currentTheme === THEMES.SYSTEM && (
                  <svg className="inline-block w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ThemeToggle;
