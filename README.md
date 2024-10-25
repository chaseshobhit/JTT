                         JTT (JUST TRAIN TODAY) Fitness Platform:


# JTT Fitness Platform

Welcome to the JTT Fitness Platform – a web-based fitness platform built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB Atlas. JTT helps you stay active, track your fitness, and earn rewards for maintaining a healthy lifestyle! The platform also allows users to sign up for memberships, and data is securely stored in MongoDB Atlas.

---

## Features

- Daily Fitness Tracking: Track your fitness activities, set goals, and monitor your progress.
- Earn Coins: Active users earn virtual coins by tracking their daily fitness activities and     staying engaged on the platform.
- Redeem Rewards: Use your earned coins to purchase fitness accessories and receive discounts on products in the JTT store.
- User Membership Management: Sign up for membership by providing contact information, securely stored in MongoDB Atlas.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

---

## Getting Started

To get started with the JTT Fitness Platform, clone this repository and set up the environment as specified. Ensure you have Node.js installed on your system to run the backend, and make sure you have an active MongoDB Atlas account to store user information.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/jtt-fitness-platform.git
   cd jtt-fitness-platform
   ```

2. **Set up the environment**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB Atlas connection string and other environment variables to the `.env` file as follows:
     ```bash
     MONGODB_URI=your_mongodb_atlas_connection_string
     PORT=your_port_number
     ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Access the frontend**:
   Open the `index.html` file in your browser to start using the platform locally or use the server endpoint to serve the frontend.

---

## Usage

1. **Track Your Fitness**: Log in daily to track your fitness activities.
2. **Earn Coins**: Each day you track your fitness, you earn coins that can be collected for rewards.
3. **Redeem Rewards**: Use your coins to shop for fitness accessories or get discounts at the JTT store.
4. **Membership**: Users can sign up for a membership by providing their name and phone number, which are securely stored in MongoDB Atlas to personalize the experience.

---

## Technologies Used

The JTT Fitness Platform was built with:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas (for storing user information securely)

---

## API Endpoints

The following API endpoints are available for the platform's backend:

- **POST /api/memberships**: Allows users to register their name and phone number to sign up for a membership.
- **GET /api/memberships**: Retrieves information on existing members (restricted access for administrators only).
- **Other Endpoints**: Additional endpoints may include options for tracking activity, earning coins, and managing user data.

---

## Contributing

We welcome contributions to enhance and grow the JTT Fitness Platform. To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---


Enjoy tracking your fitness and stay healthy with **JTT Fitness Platform**! 😊

--- 
