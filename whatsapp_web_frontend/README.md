# WhatsApp Web Clone UI

A modern, pixel-perfect WhatsApp Web clone built with React.js and Tailwind CSS. This project implements a fully responsive three-panel layout with mock data and smooth interactions.

## Features

### Layout
- **Desktop Three-Panel Layout**: 
  - Left sidebar with chat list and search
  - Center chat window with header, messages, and input
  - Right details panel (collapsible)
- **Responsive Design**: 
  - Collapses right panel on medium screens
  - Overlay chat list on mobile devices
  - Smooth transitions between panels

### Components

#### Sidebar Components
- **ChatList**: Displays all conversations with search functionality
- **ChatListItem**: Individual chat entry with avatar, name, last message, timestamp, and unread badge
- **SearchBar**: Filter chats by contact name or message content
- **DetailsPanel**: Contact information and media placeholders (collapsible)

#### Chat Components
- **ChatWindow**: Main chat area combining header, messages, and input
- **ChatHeader**: Contact info with status and action buttons
- **MessageList**: Scrollable message history with auto-scroll
- **MessageBubble**: Individual messages (sent/received) with timestamps and read indicators
- **ChatInput**: Message composition with emoji and attachment placeholders

#### Profile Components
- **ProfilePage**: User profile page with editable fields
  - Display and edit user name
  - Display and edit about/bio
  - Display and edit phone number
  - View current status (online/offline)
  - Change profile photo placeholder
  - Toggle between view and edit modes
  - Save/cancel functionality

### Theme & Styling
- **Pure White Minimalist Theme**:
  - Primary: #374151 (gray-700)
  - Success: #10B981 (green)
  - Background: #f9fafb (light gray)
  - Surface: #ffffff (white)
  - Text: #111827 (dark gray)
- **Subtle Retro Feel**:
  - Soft shadows
  - Rounded corners
  - Subtle grain texture overlay via CSS
- **Tailwind CSS**: Utility-first styling with minimal custom CSS

### Interactions
- ✅ Select and switch between chats
- ✅ Send new messages (appends to mock state)
- ✅ Search/filter chats by contact or message
- ✅ Toggle details panel
- ✅ Navigate to Profile page
- ✅ Edit profile information in-memory
- ✅ Responsive mobile menu
- ✅ Keyboard navigation support
- ✅ Smooth transitions and animations

### Accessibility
- Keyboard focus styles
- ARIA labels for interactive elements
- Semantic HTML structure
- High color contrast ratios
- data-testid attributes for testing

## Navigation

### Accessing the Profile Page
The Profile page can be accessed in multiple ways:
1. **From the Chat List**: Click on your avatar in the top-left corner of the chat list sidebar
2. **Direct URL**: Navigate to `/profile` in the browser

### Profile Page Features
- **View Mode**: Default mode showing all user information
- **Edit Mode**: Click "Edit Profile" to modify:
  - Display name
  - About/bio text
  - Phone number
- **Save Changes**: Click "Save Changes" to update the profile (changes are stored in-memory)
- **Cancel**: Click "Cancel" to discard changes and return to view mode
- **Back Navigation**: Use the back arrow to return to the chat interface

**Note**: All profile changes are stored in-memory and will be lost on page refresh. No backend persistence is implemented.

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── SearchBar.js          # Reusable search component
│   ├── sidebar/
│   │   ├── ChatList.js           # Chat list container
│   │   ├── ChatListItem.js       # Individual chat item
│   │   └── DetailsPanel.js       # Contact details panel
│   ├── chat/
│   │   ├── ChatWindow.js         # Main chat container
│   │   ├── ChatHeader.js         # Chat header with actions
│   │   ├── MessageList.js        # Message history
│   │   ├── MessageBubble.js      # Individual message
│   │   └── ChatInput.js          # Message input area
│   └── profile/
│       └── ProfilePage.js        # User profile page
├── data/
│   └── mockData.js               # Mock contacts, chats, and current user
├── types/
│   └── index.js                  # Type definitions (JSDoc)
├── App.js                        # Main application with routing
├── App.css                       # Custom styles
├── index.js                      # Entry point
└── index.css                     # Tailwind imports & base styles
```

## Mock Data

The application includes realistic mock data:
- **Current User**: Profile information for the logged-in user
  - Name: John Doe
  - Avatar: 😊
  - Phone: +1 (555) 123-4567
  - About: "Hey there! I am using WhatsApp."
  - Status: online
- **8 contacts** with avatars (emojis), names, statuses, and about text
- **8 chat conversations** with message history
- **Realistic timestamps**: "10:30 AM", "Yesterday", "2 days ago", etc.
- **Unread counts** for some conversations
- **Read/unread indicators** on sent messages

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build
```

## Usage

1. **Browse Chats**: Scroll through the chat list on the left
2. **Search**: Use the search bar to filter chats by name or message content
3. **Select Chat**: Click any chat to view the conversation
4. **Send Message**: Type in the input field and press Enter or click the send button
5. **View Details**: Click the info icon in the chat header to open contact details
6. **Access Profile**: Click your avatar in the top-left corner to view/edit your profile
7. **Edit Profile**: Click "Edit Profile" button to modify your information
8. **Save Changes**: Click "Save Changes" to update (in-memory only)
9. **Mobile**: On small screens, use the menu button to toggle the chat list

## Technical Details

### State Management
- React hooks (useState) for local state
- No external state management library needed
- All data stored in component state
- Profile changes update parent App state

### Routing
- React Router v6 for client-side navigation
- Routes:
  - `/` - Main chat interface
  - `/profile` - User profile page

### Styling Approach
- Tailwind CSS v3 for utility-first styling
- Minimal custom CSS in App.css
- CSS variables for theme colors
- Responsive design with Tailwind breakpoints (sm, md, lg, xl)

### Performance
- Production build: ~50KB gzipped JS
- Fast initial load
- Smooth 60fps animations
- Auto-scroll optimization with useRef

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox

## Environment Variables

The following environment variables are available (defined in .env):
- `REACT_APP_API_BASE`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_FRONTEND_URL`
- `REACT_APP_WS_URL`
- Other React app configuration variables

Note: This is a frontend-only implementation with mock data. No backend or API calls are made.

## Limitations

- **No Backend**: All data is mock and stored in memory
- **No Persistence**: Messages and profile changes reset on page refresh
- **No Authentication**: No user login or profiles beyond mock current user
- **No Real-time**: No WebSocket or live updates
- **No Media Upload**: Attachment and emoji buttons are placeholders
- **In-Memory Routing**: Uses browser-based client-side routing only

## Future Enhancements

Potential additions if backend were added:
- Real-time messaging with WebSocket
- User authentication and profiles
- Message and profile data persistence
- Media upload and display
- Group chats
- Voice/video call UI
- Message reactions
- Search within conversations
- Message forwarding
- Chat archiving

## Testing

The application includes data-testid attributes on key elements for testing:
- `profile-page` - Profile page container
- `profile-avatar` - User avatar display
- `name-input`, `name-display` - Name field
- `about-input`, `about-display` - About field
- `phone-input`, `phone-display` - Phone field
- `status-display` - Status indicator
- `edit-button` - Edit profile button
- `save-button` - Save changes button
- `cancel-button` - Cancel edit button
- `back-button` - Back navigation button

## License

This is a demo project for educational purposes.

## Acknowledgments

- Design inspired by WhatsApp Web
- Built with React and Tailwind CSS
- Icons from Heroicons (inline SVG)
