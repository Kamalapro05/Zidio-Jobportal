# Job Portal Application - Backend

This is the backend part of the Job Portal application built using Spring Boot. The application provides features for job seekers, recruiters, and administrators.

## Project Structure

The backend project follows a standard Spring Boot structure:

```
backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── jobportal
│   │   │           ├── JobPortalApplication.java      # Main entry point of the application
│   │   │           ├── config                          # Configuration classes (security, database)
│   │   │           ├── controller                      # REST controllers for handling requests
│   │   │           ├── dto                             # Data Transfer Objects
│   │   │           ├── exception                        # Custom exception classes
│   │   │           ├── model                           # Entity classes for database tables
│   │   │           ├── repository                      # Repository interfaces for database access
│   │   │           ├── security                         # Security-related classes (JWT, authentication)
│   │   │           └── service                          # Service classes for business logic
│   │   └── resources
│   │       ├── application.properties                  # Configuration properties
│   │       └── static                                  # Static resources (CSS, JS, images)
│   └── test
│       └── java
│           └── com
│               └── jobportal
│                   └── JobPortalApplicationTests.java  # Unit tests for the application
├── pom.xml                                             # Maven configuration file
└── README.md                                           # Documentation for the backend project
```

## Features

- **Job Seekers**: 
  - Search and apply for jobs.
  - Manage their profiles and applications.

- **Recruiters**: 
  - Post job listings.
  - Review applications and manage candidates.

- **Admins**: 
  - Manage users and oversee the platform.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the backend directory**:
   ```
   cd job-portal-app/backend
   ```

3. **Build the project**:
   ```
   mvn clean install
   ```

4. **Run the application**:
   ```
   mvn spring-boot:run
   ```

5. **Access the API**: The backend will be available at `http://localhost:8080`.

## Dependencies

The project uses Maven for dependency management. The required dependencies are listed in the `pom.xml` file.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.