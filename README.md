# personal-finance-tracker
Personal Finance Tracker

## Project Overview
The *Personal Finance Tracker* is a web application that allows users to manage their finances by tracking income and expenses. Users can add, edit, delete, and filter transactions, and view a summary of their financial health, including total income, total expenses, and current balance.

The project is built with a *React.js* frontend and a *Node.js* backend with *Express.js* for the API. *MongoDB* is used as the database for storing transaction data.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Deployment](#deployment)

## Prerequisites
Before setting up the project, ensure you have the following installed:
- *Node.js* (v14+)
- *Yarn* (preferred over npm)
- *MongoDB* (either locally or MongoDB Atlas for remote hosting)

## Project Structure

/New Finance Tracker    # Frontend code (React.js)
/Personal Finance Backend  # Backend code (Node.js, Express)


## Setup Instructions

### 1. Backend Setup

1. *Navigate to the backend folder:*
   bash
   cd Personal\ Finance\ Backend
   

2. *Install dependencies:*
   bash
   yarn install
   

3. *Environment Setup:*
   Create a .env file in the Personal Finance Backend folder with the following content:
   
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/financeTracker
   4. *Start the backend server:*
   bash
   yarn start
   

   The backend should now be running at [http://localhost:5000](http://localhost:5000).

### 2. Frontend Setup

1. *Navigate to the frontend folder:*
   bash
   cd ../New\ Finance\ Tracker
   

2. *Install dependencies:*
   bash
   yarn install
   

3. *Start the frontend development server:*
   bash
   yarn start
   

   The frontend will now be running at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints
The backend API provides the following endpoints to manage transactions:

- *GET /transactions*: Retrieve all transactions.
- *POST /transactions*: Add a new transaction.
- *PUT /transactions/:id*: Update an existing transaction.
- *DELETE /transactions/:id*: Delete a transaction.

### Example:
To retrieve all transactions:
bash
GET http://localhost:5000/transactions


---

## Features

### 1. Add, Edit, and Delete Transactions
- *Add* new transactions with type (Income/Expense), amount, description, and date.
- *Edit* transactions to modify existing details.
- *Delete* transactions when no longer needed.

### 2. View and Filter Transactions
- View a list of all transactions.
- *Filter* transactions by type (Income/Expense) and date range.

### 3. Financial Summary
- *Total Income*: Sum of all income transactions.
- *Total Expenses*: Sum of all expense transactions.
- *Balance*: Difference between total income and total expenses.

---

## Deployment
If you want to deploy the project:

- *Frontend* can be deployed on *Netlify* or *Vercel*.
- *Backend* can be deployed on *Heroku*.
- *MongoDB* can be hosted on *MongoDB Atlas* for a remote database.

### Example Deployment Steps:
1. Deploy the frontend to *Netlify* by connecting your GitHub repo.
2. Deploy the backend to *Heroku*:
   - Use the heroku create command and push your backend code.
   - Make sure to set your environment variables (like MONGO_URI) on Heroku.
3. Set up *MongoDB Atlas* for remote database access and update the backend with your MongoDB URI.

---

## Conclusion
This project offers a simple yet powerful tool for managing personal finances. It combines a React.js frontend with a Node.js/Express.js backend, using MongoDB for database storage. By following the setup instructions, you should be able to run the project locally or deploy it in a production environment.

Feel free to reach out if you encounter any issues or have questions!

---

Let me know if you'd like any changes or additional sections!
