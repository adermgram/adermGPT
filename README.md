# Chat Application with React and Node.js

This project is a simple chat application built with React for the frontend and Node.js for the backend. The app enables users to initiate conversations and interact with an AI-powered chatbot using the Cohere API.

---
# Screenchot
![image](https://github.com/user-attachments/assets/9ae3222f-fea6-4973-821f-e82f4dbbcd31)


## Features
- **Create New Chats**: Start fresh conversations.
- **Chat History**: View previous chats organized by conversation titles.
- **Interactive UI**: Input prompts and receive AI responses.
- **Backend Integration**: Node.js backend handles API communication with Cohere's AI model.

---

## Tech Stack
### Frontend:
- React
- Axios (for HTTP requests)

### Backend:
- Node.js
- Express
- Cohere API
- dotenv (for environment variable management)
- CORS
- Body-parser

---

## Setup and Installation
### Prerequisites:
- Node.js and npm installed on your system.

### Steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adermgram/adermGPT.git
   ```
2. **Set Up Backend**:
   - Navigate to the backend folder:
     ```
     bash cd backend
     ```
     
   - Install dependencies:
     ```bash 
      npm install
       ```
   - Create a .env file in the backend directory with the following content:
     ```bash
     COHERE_API_KEY=your-api-key
     PORT=3000
     COHERE_URL=https://api.cohere.ai/v1/generate
       ```
   - Start the backend server:
        ```bash 
      node index.js
       ```
3. **Set Up The Frontend**:
   - Navigate to the frontend folder:
      ```bash
      cd ../frontend
       ```
    - Install dependencies:
       ```bash 
        npm install
         ```
    - Start the React development server:
         ```bash
         npm run dev
         ```
  3. **Run the Application**:
     - Open your browser and go to http://localhost:5173 to use the application.
       
