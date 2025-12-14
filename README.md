# Real-Time Notification Dashboard

A modern, responsive notification system dashboard built with Next.js, TypeScript, and Tailwind CSS. Features real-time notification simulation, analytics visualization, and a clean, intuitive user interface.

## Features

### Notification System
- **Real-time notifications** - Simulated real-time notifications appear every 15-30 seconds
- **Read/Unread states** - Mark notifications as read by clicking on them
- **Delete functionality** - Remove notifications with a single click
- **Mark all as read** - Bulk action to mark all notifications as read
- **localStorage persistence** - Unread count and read states persist across page reloads
- **Smooth animations** - Fade-in animations for new notifications and smooth transitions

### Analytics Dashboard
- **Notifications over time** - Bar chart showing notification distribution over the last 24 hours
- **Read vs Unread statistics** - Pie chart displaying the ratio of read to unread notifications
- **Responsive charts** - Charts adapt to different screen sizes

### Bonus Features
- **Search functionality** - Filter notifications by title or message
- **Filter chips** - Filter by All, Unread, Read, or by type (info, success, warning, error)
- **Sorting** - Sort notifications by time, type, or read status

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Heroicons
- **State Management**: React Context API
- **Persistence**: localStorage

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dashboard-app/
├── app/
│   ├── api/
│   │   ├── analytics/
│   │   └── notifications/
│   ├── analytics/
│   ├── notifications/
│   └── layout.tsx
├── src/
│   ├── components/
│   │   ├── charts/
│   │   ├── notifications/
│   │   ├── ui/
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   ├── contexts/
│   │   └── NotificationsContext.tsx
│   ├── hooks/
│   │   ├── useNotifications.ts
│   │   └── useRealtimeNotifications.ts
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── mockData.ts
│   │   └── storage.ts
│   └── types/
│       └── index.ts
└── package.json
```

## API Routes

- `GET /api/notifications` - Returns a list of notifications
- `GET /api/notifications/new` - Generates a new notification for real-time simulation
- `GET /api/analytics` - Returns analytics data (notifications over time, read vs unread stats)

## Features in Detail

### Real-Time Simulation
The app simulates real-time notifications by fetching new notifications from the API every 15-30 seconds (randomized interval).

### localStorage Persistence
Read states and unread counts are automatically saved to localStorage and restored when the page reloads.

### Responsive Design
The dashboard is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The app is ready for deployment on Vercel or any other platform that supports Next.js.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is created as part of an assignment.
