import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ProfilePage component - displays and allows editing of current user profile
 * @param {Object} props - Component props
 * @param {Object} props.user - Current user data
 * @param {Function} props.onUpdateUser - Callback when user updates their profile
 */
// PUBLIC_INTERFACE
function ProfilePage({ user, onUpdateUser }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    about: user.about,
    phone: user.phone
  });

  /**
   * Handle input changes in edit mode
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Save profile changes
   */
  const handleSave = () => {
    onUpdateUser({
      ...user,
      name: formData.name,
      about: formData.about,
      phone: formData.phone
    });
    setIsEditMode(false);
  };

  /**
   * Cancel editing and revert changes
   */
  const handleCancel = () => {
    setFormData({
      name: user.name,
      about: user.about,
      phone: user.phone
    });
    setIsEditMode(false);
  };

  /**
   * Navigate back to main chat view
   */
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col bg-background" data-testid="profile-page">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 bg-primary text-white shadow-md">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Back to chats"
          data-testid="back-button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      {/* Profile Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {/* Avatar Section */}
          <div className="flex flex-col items-center py-8 bg-white border-b border-gray-200">
            <div 
              className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-gray-100 flex items-center justify-center text-6xl shadow-lg mb-4"
              data-testid="profile-avatar"
            >
              {user.avatar}
            </div>
            <button
              className="text-sm text-success hover:text-success/80 font-medium transition-colors"
              aria-label="Change profile photo"
            >
              CHANGE PROFILE PHOTO
            </button>
          </div>

          {/* Profile Information */}
          <div className="bg-white">
            {/* Name Field */}
            <div className="px-6 py-4 border-b border-gray-200">
              <label htmlFor="name" className="block text-xs text-success mb-2 font-medium">
                Your name
              </label>
              {isEditMode ? (
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1 text-text border-b-2 border-success focus:outline-none text-lg"
                  aria-label="Edit name"
                  data-testid="name-input"
                />
              ) : (
                <p className="text-text text-lg" data-testid="name-display">
                  {user.name}
                </p>
              )}
            </div>

            {/* About Field */}
            <div className="px-6 py-4 border-b border-gray-200">
              <label htmlFor="about" className="block text-xs text-secondary mb-2">
                About
              </label>
              {isEditMode ? (
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-0 py-1 text-text border-b-2 border-success focus:outline-none resize-none"
                  aria-label="Edit about"
                  data-testid="about-input"
                />
              ) : (
                <p className="text-text" data-testid="about-display">
                  {user.about}
                </p>
              )}
            </div>

            {/* Phone Field (Read-only) */}
            <div className="px-6 py-4 border-b border-gray-200">
              <label htmlFor="phone" className="block text-xs text-secondary mb-2">
                Phone
              </label>
              {isEditMode ? (
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1 text-text border-b-2 border-success focus:outline-none"
                  aria-label="Edit phone"
                  data-testid="phone-input"
                />
              ) : (
                <p className="text-text" data-testid="phone-display">
                  {user.phone}
                </p>
              )}
            </div>

            {/* Status Field (Read-only) */}
            <div className="px-6 py-4 border-b border-gray-200">
              <label className="block text-xs text-secondary mb-2">
                Status
              </label>
              <div className="flex items-center gap-2">
                <span 
                  className={`w-3 h-3 rounded-full ${
                    user.status === 'online' ? 'bg-success' : 'bg-gray-400'
                  }`}
                  aria-label={`Status: ${user.status}`}
                />
                <p className="text-text capitalize" data-testid="status-display">
                  {user.status}
                </p>
              </div>
            </div>
          </div>

          {/* Edit/Save Buttons */}
          <div className="px-6 py-6 bg-white mt-4">
            {isEditMode ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 px-6 py-3 bg-success text-white rounded-lg hover:bg-success/90 font-medium transition-colors shadow-sm"
                  data-testid="save-button"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 bg-gray-200 text-text rounded-lg hover:bg-gray-300 font-medium transition-colors"
                  data-testid="cancel-button"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditMode(true)}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium transition-colors shadow-sm"
                data-testid="edit-button"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
