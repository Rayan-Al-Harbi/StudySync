# StudySync Tasks - Real-Time Collaborative Task Management

A full-stack web application for university students to create shared, course-based task lists with real-time synchronization using Firebase.


# **Setup Instructions**

To run the project locally, follow the steps below.


## **1. Prerequisites**

Make sure you have the following installed:

* **Node.js v18+**
* **npm**
* **Firebase project** with:

  * Email/Password Authentication enabled
  * Firestore database enabled


## **2. Installation**

Clone the repository:

```bash
git clone https://github.com/EccentricRay/StudySync.git
```

Navigate into the project folder:

```bash
cd StudySync
```

Install dependencies:

```bash
npm install
```



## **3. Environment Configuration**

Create a `.env` file in the project root and add your Firebase configuration:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Optional (default: 5000)
PORT=5000
```

Ensure each field corresponds to your Firebase project settings.



## **4. Running the Development Server**

Start the development server:

```bash
npm run dev


Then open the app at:

```
http://localhost:PORT


If `PORT` is not set, it defaults to **5000**.


## Features

**Core Features:**
- User authentication with email verification
- Course-based task organization
- Real-time task synchronization across all users
- Task management with priorities, due dates, and assignments
- Filtering and sorting capabilities
- Responsive design for mobile and desktop

**Task Management:**
- Create, edit, and delete tasks
- Mark tasks as complete/pending
- Assign tasks to course members
- Set priority levels (Low, Medium, High)
- Add due dates with overdue indicators
- Add optional descriptions

**Course Organization:**
- Create multiple courses
- Automatic course member management
- Task counts per course
- Progress tracking

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui components
- **Backend:** Firebase Authentication + Firestore
- **Real-time:** Firestore onSnapshot listeners
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod validation

## Running the Application

The app is already configured with your Firebase credentials. Simply:

1. Visit the deployed URL
2. Click "Create an account"
3. Register with your email
4. Check your email for verification link
5. Click the verification link
6. Return to the app and click "Check Verification"
7. Start creating courses and tasks!

## Usage Guide

### Getting Started

1. **Register** - Create an account with your university email
2. **Verify Email** - Click the link sent to your email
3. **Create a Course** - Click the "+" button in the sidebar
4. **Add Tasks** - Click "New Task" on the dashboard or course page

### Creating Tasks

1. Click "New Task" or "Add Task"
2. Fill in:
   - Title (required)
   - Description (optional)
   - Course (select from dropdown)
   - Priority (Low/Medium/High)
   - Due Date (optional)
   - Assign To (yourself or course member)
3. Click "Create Task"

### Managing Tasks

- **Complete:** Click the checkbox next to a task
- **Edit:** Click the three-dot menu → Edit
- **Delete:** Click the three-dot menu → Delete
- **Filter:** Use the filter dropdowns on course pages
- **Sort:** Choose to sort by due date or priority
