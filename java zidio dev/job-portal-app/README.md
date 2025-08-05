# Job Portal Application

This is a full-stack Job Portal web application built using Java Spring Boot for the backend and React for the frontend. The application provides features for job seekers, recruiters, and administrators.

## Project Structure

The project is organized into two main parts: `backend` and `frontend`.

### Backend

The backend is developed using Spring Boot and follows a standard structure:

- **src/main/java/com/jobportal**: Contains the main application code.
  - **JobPortalApplication.java**: The entry point of the Spring Boot application.
  - **config**: Configuration classes for security and database settings.
  - **controller**: REST controllers for handling requests.
  - **dto**: Data Transfer Objects for data exchange.
  - **exception**: Custom exception classes for error handling.
  - **model**: Entity classes representing database tables.
  - **repository**: Interfaces for database access using Spring Data JPA.
  - **security**: Classes for security, including JWT token management.
  - **service**: Business logic for user and job management.

- **src/main/resources**: Contains configuration files and static resources.
  - **application.properties**: Configuration properties for the application.
  - **static**: Directory for static resources like CSS and JavaScript.

- **src/test/java/com/jobportal**: Contains unit tests for the application.

- **pom.xml**: Maven configuration file for dependencies and plugins.

### Frontend

The frontend is developed using React and includes:

- **src/components**: React components used throughout the application.
- **src/pages**: Page components for different views (e.g., job listings, user dashboards).
- **src/services**: Service classes for making API calls to the backend.
- **App.js**: Main component that sets up the React application and routing.
- **index.js**: Entry point for the React application.

- **public/index.html**: Main HTML file for the React application.
- **package.json**: Configuration file for the frontend project.

## Features

- **Job Seekers**: 
  - Search and apply for jobs.
  - Create and manage user profiles.
  
- **Recruiters**: 
  - Post job listings.
  - Manage applications and view candidate profiles.

- **Admins**: 
  - Manage users and job postings.
  - Oversee the overall functioning of the portal.

## Getting Started

To run the application, follow these steps:

1. **Backend**:
   - Navigate to the `backend` directory.
   - Run `mvn spring-boot:run` to start the Spring Boot application.

2. **Frontend**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the React application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.