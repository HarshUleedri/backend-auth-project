# Authentication Project

This project is a backend authentication system built with Node.js. It provides user registration, login, and authentication functionalities.

## Features

- User registration
- User login
- Token-based authentication
- Password hashing

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/authentication-project.git
   cd authentication-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Register a new user:

  ```bash
  curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"username":"yourusername", "password":"yourpassword"}'
  ```

- Login with an existing user:

  ```bash
  curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"yourusername", "password":"yourpassword"}'
  ```

- Access a protected route:
  ```bash
  curl -X GET http://localhost:3000/protected -H "Authorization: Bearer your_jwt_token"
  ```

## License

This project is licensed under the MIT License.
