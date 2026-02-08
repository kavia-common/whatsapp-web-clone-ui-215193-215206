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
- ✅ Responsive mobile menu
- ✅ Keyboard navigation support
- ✅ Smooth transitions and animations

### Accessibility
- Keyboard focus styles
- ARIA labels for interactive elements
- Semantic HTML structure
- High color contrast ratios

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
│   └── chat/
│       ├── ChatWindow.js         # Main chat container
│       ├── ChatHeader.js         # Chat header with actions
│       ├── MessageList.js        # Message history
│       ├── MessageBubble.js      # Individual message
│       └── ChatInput.js          # Message input area
├── data/
│   └── mockData.js               # Mock contacts and chats
├── types/
│   └── index.js                  # Type definitions (JSDoc)
├── App.js                        # Main application component
├── App.css                       # Custom styles
├── index.js                      # Entry point
└── index.css                     # Tailwind imports & base styles
```

## Mock Data

The application includes realistic mock data:
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
6. **Mobile**: On small screens, use the menu button to toggle the chat list

## Technical Details

### State Management
- React hooks (useState) for local state
- No external state management library needed
- All data stored in component state

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
- **No Persistence**: Messages and state reset on page refresh
- **No Authentication**: No user login or profiles
- **No Real-time**: No WebSocket or live updates
- **No Media Upload**: Attachment and emoji buttons are placeholders
- **No Routing**: Single-page application without URL routing

## Future Enhancements

Potential additions if backend were added:
- Real-time messaging with WebSocket
- User authentication and profiles
- Message persistence
- Media upload and display
- Group chats
- Voice/video call UI
- Message reactions
- Search within conversations
- Message forwarding
- Chat archiving

## License

This is a demo project for educational purposes.

## Acknowledgments

- Design inspired by WhatsApp Web
- Built with React and Tailwind CSS
- Icons from Heroicons (inline SVG)
