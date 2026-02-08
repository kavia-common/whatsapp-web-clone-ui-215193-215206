/**
 * Type definitions for WhatsApp Web Clone
 */

// Contact information
export const ContactType = {
  name: '',
  avatar: '',
  status: '',
  about: ''
};

// Message structure
export const MessageType = {
  id: '',
  text: '',
  timestamp: '',
  sent: false, // true if sent by user, false if received
  read: false
};

// Chat conversation
export const ChatType = {
  id: '',
  contact: ContactType,
  messages: [],
  lastMessage: '',
  lastMessageTime: '',
  unreadCount: 0
};
