# University Website

A simple Flask web application for a university site.

## Description

This project is a basic website built with Flask, featuring pages for the homepage, about section, and a contact form.

## Prerequisites

- Python 3.x
- Flask
- Flask-WTF

## Installation

1. Clone the repository.
2. Install the required dependencies:
   ```
   pip install flask flask-wtf
   ```

## Running the Application

To run the application in development mode:

```
python main.py
```

The application will be available at `http://localhost:5000`.

## Features

- **Homepage**: Main landing page.
- **About**: Information about the university.
- **Contact**: A form to send messages (email, subject, description).

## Project Structure

- `main.py`: Entry point to run the Flask app.
- `university/src/`: Contains the Flask app logic, routes, and forms.
- `university/templates/`: HTML templates for the pages.
- `university/static/`: Static assets like CSS and images.
