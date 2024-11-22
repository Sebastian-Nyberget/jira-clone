# Jira Clone - Next.js Project

## Overview

This project is a **Jira Clone** built using **Next.js**, designed to help teams efficiently manage projects, tasks, and collaboration. It incorporates modern tools, libraries, and practices to deliver a robust and user-friendly experience. The application uses **Appwrite** as its backend for authentication, database, and storage, alongside a variety of React and Radix UI components for the frontend.

---

## Features

- **Task Management:** Create, edit, and delete tasks within projects.
- **User Authentication:** Secure login and signup with Appwrite.
- **Real-Time Updates:** Powered by `@tanstack/react-query` for caching and data synchronization.
- **Modern UI Components:** Built with Shadcn for accessible and customizable design.
- **Custom Theming:** Supports light/dark mode with `next-themes`.
- **Charts and Visuals:** Leverage Recharts for insightful project analytics.
- **Form Validation:** Powered by `react-hook-form` and `zod` for seamless and type-safe forms.

---

## Tech Stack

### Frontend
- **Framework:** [Next.js](https://nextjs.org/)
- **UI Components:** [Shadcn](https://ui.shadcn.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with `tailwind-merge` and `tailwindcss-animate`
- **Forms:** [React Hook Form](https://react-hook-form.com/) with `@hookform/resolvers` for schema validation

### Backend
- **Appwrite:** Handles authentication, database operations, and file storage.

### Utilities
- **Data Fetching and Caching:** [@tanstack/react-query](https://tanstack.com/query)
- **Validation:** [zod](https://zod.dev)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Date Utilities:** [date-fns](https://date-fns.org/)

---

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT=<Your Appwrite Project ID>
NEXT_PUBLIC_APPWRITE_DATABASE_ID=<Your Database ID>
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=<Your Workspaces Collection ID>
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=<Your Members Collection ID>
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=<Your Projects Collection ID>
NEXT_PUBLIC_APPWRITE_BUCKET_ID=<Your Storage Bucket ID>
NEXT_APPWRITE_KEY=<Your Appwrite API Key>
```

---

## Getting Started

To get started with FlexFit, follow these instructions:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Appwrite server setup](https://appwrite.io)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
    
1. Clone the repository:
   ```sh
   git clone https://github.com/sebastian-nyberget/jira-clone.git
  
2. Navigate to the project directory:
   ```sh
   cd jira-clone
  
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

5. Open your browser and go to `http://localhost:3000`.


---

## Scripts

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the project for production
- **`npm start`** - Runs the production build
- **`npm run lint`** - Lints the codebase
- **`npm run format`** - Formats code using Prettier

---

## Packages in Use

### Core
- **`@tanstack/react-query`**: Data fetching and caching
- **`hono`**: Lightweight web framework
- **`node-appwrite`**: Appwrite SDK for Node.js

### UI/UX
- **Shadcn UI components**
- **Theming**: `next-themes`
- **Icons**: `lucide-react`
- **Animations**: `tailwindcss-animate`

### Utilities
- **Form Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Date Formatting**: `date-fns`
- **Dynamic Class Management**: `clsx`, `class-variance-authority`
