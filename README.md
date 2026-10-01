# Car Rental System

A full-stack car rental management system built with **React.js**, **Node.js**, **Express**, and **MongoDB**. Users can browse and book cars across Indian cities; car owners can list vehicles, manage bookings, and track revenue from an owner dashboard.

## Features

- User registration & login (JWT authentication)
- Browse available cars, filter by city, pickup and return date
- Real-time availability check before booking
- Booking creation with automatic price calculation
- "Become an owner" flow — any user can start listing cars
- Owner dashboard: total cars, bookings, pending/completed bookings, monthly revenue
- Owner tools to add cars (with image upload), toggle availability, delete cars
- Booking status management (pending / confirmed / cancelled) for owners
- Fully responsive UI built with Tailwind CSS

## Tech Stack

**Frontend:** React.js, React Router, Tailwind CSS, Axios, Motion (Framer Motion), React Hot Toast, Vite
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Multer

## Project Structure

```
CarRental/
├── client/       React frontend (Vite)
└── server/       Node/Express REST API
```

## Getting Started

### 1. Backend

```bash
cd server
npm install
cp .env.example .env   # then fill in MONGODB_URI and JWT_SECRET
npm run dev
```

Runs on `http://localhost:3000` by default.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173` and calls the API at the URL set in `client/.env` (`VITE_BASE_URL`).

## Environment Variables

**server/.env**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

**client/.env**
```
VITE_CURRENCY=₹
VITE_BASE_URL=http://localhost:3000
```

## API Overview

| Route | Method | Description |
|---|---|---|
| `/api/user/register` | POST | Register a new user |
| `/api/user/login` | POST | Login and receive a JWT |
| `/api/user/data` | GET | Get logged-in user's data |
| `/api/user/cars` | GET | List all available cars |
| `/api/owner/change-role` | POST | Become an owner |
| `/api/owner/add-car` | POST | Add a new car (image upload) |
| `/api/owner/cars` | GET | List owner's cars |
| `/api/owner/toggle-car` | POST | Toggle car availability |
| `/api/owner/delete-car` | POST | Remove a car |
| `/api/owner/dashboard` | GET | Owner dashboard stats |
| `/api/bookings/check-availability` | POST | Check car availability for dates |
| `/api/bookings/create` | POST | Create a booking |
| `/api/bookings/user` | GET | Get logged-in user's bookings |
| `/api/bookings/owner` | GET | Get bookings for owner's cars |
| `/api/bookings/change-status` | POST | Update a booking's status |

## License

This project is open source and available for personal and educational use.
