/**
 * Internationalization (i18n) utilities
 * Simple dictionary-based translation system with localStorage persistence
 */

// Available languages
export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  fr: 'Français'
};

// Translation dictionaries
const translations = {
  en: {
    // Common
    search: 'Search or start new chat',
    typeMessage: 'Type a message',
    online: 'online',
    offline: 'offline',
    away: 'away',
    
    // Chat list
    chats: 'Chats',
    noChatsFound: 'No chats found',
    newChat: 'New chat',
    menu: 'Menu',
    
    // Chat window
    selectChat: 'Select a chat to start messaging',
    noMessages: 'No messages yet. Start the conversation!',
    
    // Chat header
    searchInChat: 'Search in chat',
    contactInfo: 'Contact info',
    moreOptions: 'More options',
    
    // Chat input
    addEmoji: 'Add emoji',
    attachFile: 'Attach file',
    sendMessage: 'Send message',
    
    // Details panel
    contactInfoTitle: 'Contact Info',
    close: 'Close details',
    about: 'About',
    mediaLinksAndDocs: 'Media, Links and Docs',
    deleteChat: 'Delete Chat',
    
    // Profile page
    profile: 'Profile',
    backToChats: 'Back to chats',
    changeProfilePhoto: 'CHANGE PROFILE PHOTO',
    yourName: 'Your name',
    phone: 'Phone',
    status: 'Status',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    
    // Language selector
    language: 'Language',
    selectLanguage: 'Select Language'
  },
  
  es: {
    // Common
    search: 'Buscar o iniciar un nuevo chat',
    typeMessage: 'Escribe un mensaje',
    online: 'en línea',
    offline: 'desconectado',
    away: 'ausente',
    
    // Chat list
    chats: 'Chats',
    noChatsFound: 'No se encontraron chats',
    newChat: 'Nuevo chat',
    menu: 'Menú',
    
    // Chat window
    selectChat: 'Selecciona un chat para comenzar a mensajear',
    noMessages: '¡Aún no hay mensajes. Comienza la conversación!',
    
    // Chat header
    searchInChat: 'Buscar en el chat',
    contactInfo: 'Información del contacto',
    moreOptions: 'Más opciones',
    
    // Chat input
    addEmoji: 'Agregar emoji',
    attachFile: 'Adjuntar archivo',
    sendMessage: 'Enviar mensaje',
    
    // Details panel
    contactInfoTitle: 'Información del Contacto',
    close: 'Cerrar detalles',
    about: 'Acerca de',
    mediaLinksAndDocs: 'Medios, Enlaces y Documentos',
    deleteChat: 'Eliminar Chat',
    
    // Profile page
    profile: 'Perfil',
    backToChats: 'Volver a los chats',
    changeProfilePhoto: 'CAMBIAR FOTO DE PERFIL',
    yourName: 'Tu nombre',
    phone: 'Teléfono',
    status: 'Estado',
    editProfile: 'Editar Perfil',
    saveChanges: 'Guardar Cambios',
    cancel: 'Cancelar',
    
    // Language selector
    language: 'Idioma',
    selectLanguage: 'Seleccionar Idioma'
  },
  
  fr: {
    // Common
    search: 'Rechercher ou démarrer une nouvelle discussion',
    typeMessage: 'Tapez un message',
    online: 'en ligne',
    offline: 'hors ligne',
    away: 'absent',
    
    // Chat list
    chats: 'Discussions',
    noChatsFound: 'Aucune discussion trouvée',
    newChat: 'Nouvelle discussion',
    menu: 'Menu',
    
    // Chat window
    selectChat: 'Sélectionnez une discussion pour commencer à envoyer des messages',
    noMessages: 'Pas encore de messages. Commencez la conversation!',
    
    // Chat header
    searchInChat: 'Rechercher dans la discussion',
    contactInfo: 'Informations du contact',
    moreOptions: 'Plus d\'options',
    
    // Chat input
    addEmoji: 'Ajouter un emoji',
    attachFile: 'Joindre un fichier',
    sendMessage: 'Envoyer le message',
    
    // Details panel
    contactInfoTitle: 'Informations du Contact',
    close: 'Fermer les détails',
    about: 'À propos',
    mediaLinksAndDocs: 'Médias, Liens et Documents',
    deleteChat: 'Supprimer la Discussion',
    
    // Profile page
    profile: 'Profil',
    backToChats: 'Retour aux discussions',
    changeProfilePhoto: 'CHANGER LA PHOTO DE PROFIL',
    yourName: 'Votre nom',
    phone: 'Téléphone',
    status: 'Statut',
    editProfile: 'Modifier le Profil',
    saveChanges: 'Enregistrer les Modifications',
    cancel: 'Annuler',
    
    // Language selector
    language: 'Langue',
    selectLanguage: 'Sélectionner la Langue'
  }
};

const STORAGE_KEY = 'whatsapp_language';
const DEFAULT_LANGUAGE = 'en';

/**
 * Get current language from localStorage or default
 * @returns {string} Current language code
 */
// PUBLIC_INTERFACE
export function getCurrentLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && LANGUAGES[stored] ? stored : DEFAULT_LANGUAGE;
}

/**
 * Set current language and persist to localStorage
 * @param {string} languageCode - Language code (en, es, fr)
 */
// PUBLIC_INTERFACE
export function setLanguage(languageCode) {
  if (LANGUAGES[languageCode]) {
    localStorage.setItem(STORAGE_KEY, languageCode);
  }
}

/**
 * Get translation for a key in the current language
 * @param {string} key - Translation key
 * @param {string} [lang] - Optional language override
 * @returns {string} Translated text
 */
// PUBLIC_INTERFACE
export function translate(key, lang = null) {
  const language = lang || getCurrentLanguage();
  return translations[language]?.[key] || translations[DEFAULT_LANGUAGE]?.[key] || key;
}

/**
 * Get all translations for current language
 * @param {string} [lang] - Optional language override
 * @returns {Object} Translation dictionary
 */
// PUBLIC_INTERFACE
export function getTranslations(lang = null) {
  const language = lang || getCurrentLanguage();
  return translations[language] || translations[DEFAULT_LANGUAGE];
}
