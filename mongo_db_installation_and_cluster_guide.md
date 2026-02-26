# MongoDB Installation and Cluster (Atlas) Guide

This guide explains:
1. How to install MongoDB locally (Community Edition)
2. How to create a cluster using MongoDB Atlas (Cloud)

---

# PART 1: Install MongoDB Locally (Windows)

## Step 1: Download MongoDB
- Go to the official MongoDB website
- Download MongoDB Community Server
- Choose:
  - Version: Latest
  - OS: Windows
  - Package: MSI

## Step 2: Install MongoDB
- Open the downloaded .msi file
- Click Next
- Choose Complete Setup
- Select "Install MongoDB as a Service"
- Click Install
- Finish installation

## Step 3: Verify Installation
Open Command Prompt and type:

mongod --version

If version is shown, MongoDB is installed successfully.

## Step 4: Check MongoDB Service
Press Win + R → type services.msc → Enter
Check if "MongoDB" service is running.

## Step 5: Connect Using Mongo Shell
Open Command Prompt and type:

mongosh

If connected, you will see MongoDB shell.

---

# PART 2: Create MongoDB Atlas Cluster (Cloud)

MongoDB Atlas is cloud-based MongoDB.

## Step 1: Create Account
- Go to MongoDB Atlas website
- Click "Try Free"
- Sign up using Google or Email

## Step 2: Create Organization and Project
- Create Organization (any name)
- Create New Project

## Step 3: Build a Cluster
- Click "Build a Database"
- Choose FREE Shared Cluster (M0)
- Choose Cloud Provider (AWS recommended)
- Choose Region (Nearest to your location)
- Click Create Cluster

Wait 2–5 minutes for cluster creation.

## Step 4: Create Database User
- Go to Database Access
- Click "Add New Database User"
- Set:
  - Username
  - Password
- Choose "Read and Write to any database"
- Click Add User

## Step 5: Add IP Address
- Go to Network Access
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (0.0.0.0/0)
- Confirm

## Step 6: Connect to Cluster
- Go to Clusters
- Click "Connect"
- Choose "Connect your application"
- Copy connection string

Example connection string:

mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

Replace:
- <username> with your database username
- <password> with your password

---

# PART 3: Connect MongoDB with Node.js (Example)

Install mongoose:

npm install mongoose

Example code:

```js
const mongoose = require('mongoose');

mongoose.connect('your_connection_string_here')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
```

---

# Summary

Local MongoDB:
- Install MSI
- Run mongosh

MongoDB Atlas:
- Create account
- Create cluster
- Add user
- Add IP
- Copy connection string

Your MongoDB setup is now ready.

