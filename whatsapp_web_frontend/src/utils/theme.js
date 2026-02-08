/**
 * Theme utilities for dark mode management
 * Handles theme persistence and application
 */

const STORAGE_KEY = 'whatsapp_theme';
const DARK_MODE_CLASS = 'dark';

/**
 * Available themes
 */
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

/**
 * Get system preference for dark mode
 * @returns {boolean} True if system prefers dark mode
 */
// PUBLIC_INTERFACE
export function getSystemPreference() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Get current theme from localStorage or system preference
 * @returns {string} Current theme (light/dark/system)
 */
// PUBLIC_INTERFACE
export function getCurrentTheme() {
  if (typeof window === 'undefined') return THEMES.LIGHT;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored || THEMES.SYSTEM;
}

/**
 * Get effective theme (resolves 'system' to actual light/dark)
 * @returns {string} Effective theme (light/dark)
 */
// PUBLIC_INTERFACE
export function getEffectiveTheme() {
  const theme = getCurrentTheme();
  if (theme === THEMES.SYSTEM) {
    return getSystemPreference() ? THEMES.DARK : THEMES.LIGHT;
  }
  return theme;
}

/**
 * Set theme and persist to localStorage
 * @param {string} theme - Theme to set (light/dark/system)
 */
// PUBLIC_INTERFACE
export function setTheme(theme) {
  if (!Object.values(THEMES).includes(theme)) return;
  
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

/**
 * Apply theme to document
 * @param {string} theme - Theme to apply
 */
// PUBLIC_INTERFACE
export function applyTheme(theme) {
  if (typeof window === 'undefined') return;
  
  const effectiveTheme = theme === THEMES.SYSTEM 
    ? (getSystemPreference() ? THEMES.DARK : THEMES.LIGHT)
    : theme;
  
  if (effectiveTheme === THEMES.DARK) {
    document.documentElement.classList.add(DARK_MODE_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_MODE_CLASS);
  }
}

/**
 * Initialize theme on app load
 */
// PUBLIC_INTERFACE
export function initializeTheme() {
  const theme = getCurrentTheme();
  applyTheme(theme);
  
  // Listen for system preference changes
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (getCurrentTheme() === THEMES.SYSTEM) {
        applyTheme(THEMES.SYSTEM);
      }
    });
  }
}

/**
 * Toggle between light and dark themes
 */
// PUBLIC_INTERFACE
export function toggleTheme() {
  const current = getEffectiveTheme();
  const newTheme = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  setTheme(newTheme);
  return newTheme;
}
