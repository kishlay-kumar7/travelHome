# TravelHome

TravelHome is a web application inspired by Airbnb that allows users to explore, book, and host accommodations. This project implements key features such as user authentication, file uploads for property images, and a database-driven structure for managing user and property data. While not a complete Airbnb clone, TravelHome focuses on building a strong backend using modern tools and practices.

## Features

- **Authentication**: Secure user login and registration using Passport.js.
- **Session Management**: Persistent user sessions using `express-session`.
- **Dynamic Templating**: Use of EJS and EJS-Mate for dynamic content rendering.
- **File Uploads**: Upload images to Cloudinary using Multer and Multer-Storage-Cloudinary.
- **Database**: Store and manage data with MongoDB and Mongoose.
- **Data Validation**: Validate user inputs with Joi.
- **HTTP Method Overrides**: Enable PUT and DELETE methods using `method-override`.
- **Flash Messages**: Display user-friendly notifications with `connect-flash`.

## Technologies Used

- **Backend**:

  - Node.js
  - Express.js

- **Templating**:

  - EJS
  - EJS-Mate

- **Database**:

  - MongoDB
  - Mongoose

- **Authentication**:

  - Passport.js
  - Passport-Local
  - Passport-Local-Mongoose

- **File Uploads**:

  - Multer
  - Multer-Storage-Cloudinary
  - Cloudinary

- **Validation**:

  - Joi

- **Utilities**:
  - `dotenv` for environment variable management
  - `method-override` for supporting PUT and DELETE requests
  - `connect-flash` for flash messages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kishlay-kumar7/travelHome.git
   ```
