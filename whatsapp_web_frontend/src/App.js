import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatList from './components/sidebar/ChatList';
import ChatWindow from './components/chat/ChatWindow';
import DetailsPanel from './components/sidebar/DetailsPanel';
import ProfilePage from './components/profile/ProfilePage';
import { mockChats, currentUser as initialUser } from './data/mockData';
import { getCurrentLanguage } from './utils/i18n';

/**
 * Main App component - WhatsApp Web Clone
 * Manages state for chats, selected chat, current user, and UI interactions
 */
// PUBLIC_INTERFACE
function App() {
  const [chats, setChats] = useState(mockChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [language, setLanguage] = useState(getCurrentLanguage());

  // Get current active chat
  const activeChat = chats.find((chat) => chat.id === activeChatId);

  /**
   * Handle chat selection
   * @param {string} chatId - ID of selected chat
   */
  const handleChatSelect = (chatId) => {
    setActiveChatId(chatId);
    setIsMobileMenuOpen(false);
    // Mark as read
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
      )
    );
  };

  /**
   * Handle sending a new message
   * @param {string} messageText - Text content of the message
   */
  const handleSendMessage = (messageText) => {
    if (!activeChatId) return;

    const newMessage = {
      id: `m${Date.now()}`,
      text: messageText,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
      sent: true,
      read: false,
    };

    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === activeChatId) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: messageText,
            lastMessageTime: newMessage.timestamp,
          };
        }
        return chat;
      })
    );
  };

  /**
   * Toggle details panel visibility
   */
  const handleToggleDetails = () => {
    setDetailsOpen((prev) => !prev);
  };

  /**
   * Update current user profile
   * @param {Object} updatedUser - Updated user data
   */
  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  /**
   * Handle language change
   * @param {string} newLanguage - New language code
   */
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  /**
   * Initialize language from localStorage on mount
   */
  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, []);

  /**
   * Main chat interface component
   */
  const ChatInterface = () => (
    <div className="h-screen flex bg-background overflow-hidden">
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Left Sidebar - Chat List */}
      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-50 w-full sm:w-96 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none`}
      >
        <ChatList
          chats={chats}
          activeChat={activeChatId}
          onChatSelect={handleChatSelect}
          currentUser={currentUser}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      {/* Center - Chat Window */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Mobile header toggle */}
        {!activeChat && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-lg"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <ChatWindow
          chat={activeChat}
          onSendMessage={handleSendMessage}
          onToggleDetails={handleToggleDetails}
          language={language}
        />
      </div>

      {/* Right Sidebar - Details Panel (Desktop) */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          detailsOpen && activeChat ? 'w-96' : 'w-0'
        } overflow-hidden`}
      >
        <DetailsPanel
          contact={activeChat?.contact}
          isOpen={detailsOpen}
          onClose={handleToggleDetails}
          language={language}
        />
      </div>

      {/* Mobile Details Panel (Overlay) */}
      {detailsOpen && activeChat && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={handleToggleDetails}>
          <div
            className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <DetailsPanel
              contact={activeChat.contact}
              isOpen={detailsOpen}
              onClose={handleToggleDetails}
              language={language}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatInterface />} />
        <Route 
          path="/profile" 
          element={
            <ProfilePage 
              user={currentUser} 
              onUpdateUser={handleUpdateUser}
              language={language}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
