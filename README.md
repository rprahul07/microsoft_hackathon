# microsoft_hackathon
# Express Project

## Overview

This is a basic Express project with functionality to handle symptoms and days data. The project includes a MongoDB schema for storing this data and routes for interacting with it.

## Project Structure

- **`server.js`**: Main entry point for the server.
- **`routes/input_routes.js`**: Defines routes for handling symptoms and diseases.
- **`controllers/input_controllers.js`**: Contains logic for handling requests related to symptoms and diseases.
- **`models/symptom.js`**: Mongoose schema and model for storing symptoms and days data.

## Features

- **POST** `/symptom/input`: Save symptom and days data.
- **GET** `/symptom/diseases`: Retrieve diseases based on symptom.

## Installation

npm install






for running: "npm run dev"
