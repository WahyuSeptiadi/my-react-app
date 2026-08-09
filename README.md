# Northline Project Workspace

Northline Project Workspace is a React + Vite dashboard-style application focused on project portfolio management. The application presents a branded landing-page experience and a CRUD dashboard for monitoring operational work items across project lifecycle stages.

## Overview

This project was built as a front-end UI implementation for a fictional SaaS/operations company called Northline. It combines static marketing content with a working project management dashboard that demonstrates:

- A top-level layout with shared navigation and footer.
- A landing page that communicates Northline platform positioning and value proposition.
- A CRUD dashboard for creating, viewing, editing, searching, filtering, and deleting projects.
- A local mock API layer that simulates persistence through browser localStorage.
- Responsive styling for desktop and mobile layouts.

## Main Features

### Application Routing

The app uses React Router to switch between:

- `/` — Landing page / marketing homepage
- `/dashboard` — CRUD project workspace
- `*` — Not found fallback page

### CRUD Dashboard

The dashboard contains a project summary, project form, project table, search/filter controls, detail modal, and toast feedback.

Project data fields include:

- `id`
- `name`
- `owner`
- `status`
- `priority`
- `budget`

### Mock Data / Persistence

The API layer under `src/api/projectsApi.js` abstracts browser-side CRUD actions using asynchronous delays and the `localStorage` storage key `northline.projects`.

### UI Components

The UI is split into reusable UI and page components:

- `src/components/Layout.jsx` — top navigation, footer, and page outlet
- `src/components/ProjectForm.jsx` — create/edit project form
- `src/components/ProjectTable.jsx` — list and action controls
- `src/components/ProjectDetailModal.jsx` — detail view modal
- `src/components/ProjectSummary.jsx` — summary cards for active projects, high projects, and budget
- `src/components/Toast.jsx` — notification toast

## Project Structure

```text
src/
  api/
    projectsApi.js
  components/
    Layout.jsx
    ProjectDetailModal.jsx
    ProjectForm.jsx
    ProjectSummary.jsx
    ProjectTable.jsx
    Toast.jsx
  pages/
    CrudPage.jsx
    LandingPage.jsx
  App.jsx
  main.jsx
  index.css
```

## Getting Started

Requirements:

- Node.js 18+
- npm

Install dependencies:

```bash
npm install
```

Run the Vite development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Technologies

- React 18
- Vite 5
- React Router DOM
- PropTypes
- CSS styling with responsive layout
- LocalStorage-backed mock API data layer
