# 🔗 Service Connect

**Service Connect** is a web application designed to connect users with local service providers such as **maids, labor, and security staff**.  
It allows users to view details about workers (services, contact info, experience, and ratings) and helps service providers get visibility.

---

## 🚀 Features
- User-friendly frontend built with **HTML, CSS, and JavaScript**.
- Backend powered by **PHP** and **MySQL** (via XAMPP).
- Service providers can register their details.
- Users can search and filter based on services.
- Worker information includes **contact info, experience, and ratings**.
- Simple database design for storing and retrieving worker data.

---

## 🛠️ Tech Stack
**Frontend:** HTML, CSS, JavaScript  
**Backend:** PHP (XAMPP Server)  
**Database:** MySQL  

---

## 📂 Project Structure
├── index.html # Homepage
├── about.html # About page
├── contact.html # Contact page
├── services.html # Service listing
├── assets/ # CSS, JS, and images
├── db/ # SQL scripts for database
├── php/ # PHP backend scripts
└── README.md # Documentation

Import the database:

Open phpMyAdmin (http://localhost/phpmyadmin/)

Create a new database (e.g., service_connect)

Import the SQL file from the db/ folder

Run the project in browser:

📊 Database Schema
users: stores user info

service_providers: stores worker details (name, service type, experience, contact, rating)

bookings: stores service requests

🔮 Future Enhancements
Add authentication (user login & signup).

Enable reviews and ratings for workers.

Implement admin dashboard for managing services.

Deploy online using a hosting service instead of XAMPP.

👨‍💻 Developed by Ankit Dhar Dwivedi
