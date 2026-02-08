import React from 'react';
import { translate } from '../../utils/i18n';

/**
 * DetailsPanel component - displays contact details and media
 * @param {Object} props - Component props
 * @param {Object} props.contact - Contact information
 * @param {boolean} props.isOpen - Whether panel is visible
 * @param {Function} props.onClose - Callback to close panel
 * @param {string} props.language - Current language code
 */
// PUBLIC_INTERFACE
function DetailsPanel({ contact, isOpen, onClose, language }) {
  if (!contact || !isOpen) {
    return null;
  }

  return (
    <div className="w-full lg:w-96 bg-white border-l border-gray-200 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-gray-200">
        <h2 className="text-lg font-semibold text-text">{translate('contactInfoTitle', language)}</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={translate('close', language)}
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Contact profile */}
      <div className="flex flex-col items-center py-6 bg-background border-b border-gray-200">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-gray-100 flex items-center justify-center text-6xl shadow-lg mb-4">
          {contact.avatar}
        </div>
        <h3 className="text-xl font-semibold text-text mb-1">{contact.name}</h3>
        <p className="text-sm text-secondary">{translate(contact.status, language)}</p>
      </div>

      {/* About section */}
      <div className="px-4 py-4 border-b border-gray-200">
        <p className="text-xs text-secondary mb-2">{translate('about', language)}</p>
        <p className="text-sm text-text">{contact.about}</p>
      </div>

      {/* Media section placeholder */}
      <div className="px-4 py-4 border-b border-gray-200">
        <p className="text-xs text-secondary mb-3">{translate('mediaLinksAndDocs', language)}</p>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-error hover:bg-red-50 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span className="font-medium">{translate('deleteChat', language)}</span>
        </button>
      </div>
    </div>
  );
}

export default DetailsPanel;
