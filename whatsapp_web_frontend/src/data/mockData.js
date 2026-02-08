/**
 * Mock data for WhatsApp Web Clone
 * Provides realistic sample contacts, chats, and messages
 */

// PUBLIC_INTERFACE
export const mockContacts = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: '👩‍💼',
    status: 'online',
    about: 'Love coding and coffee ☕'
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatar: '👨‍💻',
    status: 'offline',
    about: 'Software Engineer at Tech Co.'
  },
  {
    id: '3',
    name: 'Charlie Davis',
    avatar: '🧑‍🎨',
    status: 'online',
    about: 'Designer | Creative Mind'
  },
  {
    id: '4',
    name: 'Diana Prince',
    avatar: '👩‍🚀',
    status: 'away',
    about: 'Adventure awaits! 🌍'
  },
  {
    id: '5',
    name: 'Ethan Hunt',
    avatar: '🕵️',
    status: 'offline',
    about: 'Mission specialist'
  },
  {
    id: '6',
    name: 'Fiona Green',
    avatar: '👩‍🌾',
    status: 'online',
    about: 'Nature lover 🌱'
  },
  {
    id: '7',
    name: 'George Wilson',
    avatar: '👨‍🔬',
    status: 'away',
    about: 'Science is fun!'
  },
  {
    id: '8',
    name: 'Hannah Lee',
    avatar: '👩‍🎓',
    status: 'online',
    about: 'Always learning 📚'
  }
];

// PUBLIC_INTERFACE
export const mockChats = [
  {
    id: '1',
    contact: mockContacts[0],
    messages: [
      {
        id: 'm1',
        text: 'Hey! How are you doing?',
        timestamp: '10:30 AM',
        sent: false,
        read: true
      },
      {
        id: 'm2',
        text: 'I\'m great! Working on a new project',
        timestamp: '10:32 AM',
        sent: true,
        read: true
      },
      {
        id: 'm3',
        text: 'That sounds exciting! What kind of project?',
        timestamp: '10:35 AM',
        sent: false,
        read: true
      },
      {
        id: 'm4',
        text: 'Building a WhatsApp clone with React!',
        timestamp: '10:36 AM',
        sent: true,
        read: true
      }
    ],
    lastMessage: 'Building a WhatsApp clone with React!',
    lastMessageTime: '10:36 AM',
    unreadCount: 0
  },
  {
    id: '2',
    contact: mockContacts[1],
    messages: [
      {
        id: 'm5',
        text: 'Can you review my code?',
        timestamp: '9:15 AM',
        sent: false,
        read: true
      },
      {
        id: 'm6',
        text: 'Sure, send me the link',
        timestamp: '9:20 AM',
        sent: true,
        read: true
      },
      {
        id: 'm7',
        text: 'Thanks! Here it is...',
        timestamp: '9:22 AM',
        sent: false,
        read: true
      }
    ],
    lastMessage: 'Thanks! Here it is...',
    lastMessageTime: '9:22 AM',
    unreadCount: 2
  },
  {
    id: '3',
    contact: mockContacts[2],
    messages: [
      {
        id: 'm8',
        text: 'Check out this design!',
        timestamp: 'Yesterday',
        sent: false,
        read: true
      },
      {
        id: 'm9',
        text: 'Wow, that looks amazing! 🎨',
        timestamp: 'Yesterday',
        sent: true,
        read: true
      }
    ],
    lastMessage: 'Wow, that looks amazing! 🎨',
    lastMessageTime: 'Yesterday',
    unreadCount: 0
  },
  {
    id: '4',
    contact: mockContacts[3],
    messages: [
      {
        id: 'm10',
        text: 'Planning a trip next month!',
        timestamp: 'Yesterday',
        sent: false,
        read: true
      }
    ],
    lastMessage: 'Planning a trip next month!',
    lastMessageTime: 'Yesterday',
    unreadCount: 1
  },
  {
    id: '5',
    contact: mockContacts[4],
    messages: [
      {
        id: 'm11',
        text: 'Mission accomplished ✓',
        timestamp: '2 days ago',
        sent: false,
        read: true
      },
      {
        id: 'm12',
        text: 'Great work! 👏',
        timestamp: '2 days ago',
        sent: true,
        read: true
      }
    ],
    lastMessage: 'Great work! 👏',
    lastMessageTime: '2 days ago',
    unreadCount: 0
  },
  {
    id: '6',
    contact: mockContacts[5],
    messages: [
      {
        id: 'm13',
        text: 'My garden is blooming!',
        timestamp: '3 days ago',
        sent: false,
        read: true
      }
    ],
    lastMessage: 'My garden is blooming!',
    lastMessageTime: '3 days ago',
    unreadCount: 3
  },
  {
    id: '7',
    contact: mockContacts[6],
    messages: [
      {
        id: 'm14',
        text: 'New experiment results are in',
        timestamp: 'Last week',
        sent: false,
        read: true
      }
    ],
    lastMessage: 'New experiment results are in',
    lastMessageTime: 'Last week',
    unreadCount: 0
  },
  {
    id: '8',
    contact: mockContacts[7],
    messages: [
      {
        id: 'm15',
        text: 'Just finished reading a great book!',
        timestamp: 'Last week',
        sent: false,
        read: true
      },
      {
        id: 'm16',
        text: 'Which one?',
        timestamp: 'Last week',
        sent: true,
        read: false
      }
    ],
    lastMessage: 'Which one?',
    lastMessageTime: 'Last week',
    unreadCount: 0
  }
];
