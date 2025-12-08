# StudySync Tasks - Replit Setup

## Project Overview
StudySync Tasks is a full-stack web application for university students to create shared, course-based task lists with real-time synchronization using Firebase.

## Tech Stack
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express.js (serves frontend in dev mode)
- **Database**: Firebase Firestore (real-time NoSQL database)
- **Authentication**: Firebase Authentication with email verification
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation

## Project Structure
- `client/` - React frontend application
  - `src/components/` - React components including shadcn/ui components
  - `src/pages/` - Page components (login, register, dashboard, course pages)
  - `src/contexts/` - React contexts (AuthContext)
  - `src/lib/` - Firebase config and utilities
- `server/` - Express backend
  - `index.ts` - Main server file
  - `routes.ts` - API routes (minimal, app uses Firebase directly)
  - `vite.ts` - Vite dev server integration
- `shared/` - Shared TypeScript types and schemas

## Environment Setup
The following environment variables are required (already configured):
- `VITE_FIREBASE_API_KEY` - Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID` - Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID` - Firebase app ID

## Development
- **Dev Server**: Runs on port 5000 (configured for Replit)
- **Start Command**: `npm run dev`
- The Express server serves the Vite dev server in development mode
- Hot Module Replacement (HMR) is enabled

## Deployment
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Deployment Type**: Autoscale (stateless web application)
- Production build outputs to `dist/` directory

## Firebase Setup Notes
Users need to configure Firebase Security Rules in the Firebase Console to enable proper data access. See `FIREBASE_SETUP.md` for detailed instructions.

## Key Features
- User authentication with email verification
- Course-based task organization
- Real-time task synchronization across all users
- Task management with priorities, due dates, and assignments
- Filtering and sorting capabilities
- Responsive design for mobile and desktop

## Recent Changes
- **2024-12-08**: Initial Replit setup
  - Configured Vite for Replit proxy (host: 0.0.0.0, port: 5000)
  - Added Firebase environment variables
  - Configured development workflow
  - Set up deployment configuration
  - Updated .gitignore for Replit environment
