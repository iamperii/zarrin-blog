# Zarrin-blog

**Zarrin-blog** is a full-stack web application designed for blog posts. It provides a user-friendly interface for adding, editing, deleting, and displaying products. The app uses a combination of **React**, **Node.js**, and a **mock API** for data fetching, with data stored in `db.json`.

## Features

- Responsive design using SCSS
- State management with Redux
- Fetching data from a mock API using `db.json`
- Modern, user-friendly UI/UX design

## Technologies Used

- **Frontend:**
  - React
  - Redux (for state management)
  - SCSS (for styling)
  - React Router (for routing)

- **Backend:**
  - Mock API with `db.json` 

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Zarrin-blog.git
2. Navigate to the project directory:

   ```bash
   cd Zarrin-blog
3. Install dependencies
   ```bash
   cd frontend
   npm install
4. Start the development server:
 In the Frontend folder:
  ```bash
  cd frontend
  npm run dev
```

 In the mock-api folder:
  ```bash
    cd mock-api
    json-server --watch db.json --port 5000
```


