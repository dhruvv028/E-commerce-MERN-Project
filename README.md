# 🛍️ CLOSET READY — Full-Stack E-commerce Platform

A production-ready, full-stack e-commerce platform built with the MERN stack. Includes user authentication, product browsing, shopping cart, order placement, and admin-side controls for managing inventory and orders.

🔗 Live Demo → [https://e-commerce-mern-project-qv8w.vercel.app](https://e-commerce-mern-project-qv8w.vercel.app)

![Homepage](./frontend/src/assets/cover-page.png)

---

## 🚀 Features

- 🔐 JWT-based authentication with role-based access (Admin & User)
- 🛒 Dynamic product catalog with category filtering and keyword search
- 💳 Payment gateway integration (PayPal & Paytm)
- 🧾 Order placement and history tracking
- 📦 Admin dashboard to manage products, users, and orders
- ⚡ Optimized cart state with Redux Toolkit
- 🎨 Fully responsive UI with Tailwind CSS and React Router
- ✨ Deployed on Vercel with blazing-fast builds via Vite

---

## 👨‍💻 Tech Stack

| Category   | Technology                     |
|------------|-------------------------------|
| Frontend   | React, Redux Toolkit, Vite, Tailwind CSS, React Router |
| Backend    | Node.js, Express.js, MongoDB (Mongoose) |
| Auth       | JWT, bcryptjs                  |
| Payments   | PayPal REST API, Paytm Gateway |
| Tools      | Axios, ESLint, Sonner          |
| Deployment | Vercel (Frontend), Local/Remote Node Server (Backend) |

---

## 🧪 Local Setup

Clone the project and install dependencies:

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create .env files in the frontend and backend with the following:

backend/.env:
```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYTM_KEY=your_paytm_key
```

frontend/.env:
```env
VITE_API_URL=http://localhost:5000
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

## 📷 Screenshots

![Homepage](./assets/closet-ready-homepage.png)

---

## 🤝 Acknowledgements

- PayPal Developer Docs  
- Paytm Payment Gateway Docs  
- Vite + Tailwind Starter Templates  
- MERN Boilerplates & Community
