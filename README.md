## What is Clean Architecture?

Clean Architecture is a software design philosophy that separates concerns into layers, making your code:
- **Independent of frameworks** - Your business logic doesn't depend on Express, Prisma, etc.
- **Testable** - Business rules can be tested without UI, database, or external services
- **Independent of UI** - You can change from REST to GraphQL without changing business logic
- **Independent of database** - You can switch from MySQL to PostgreSQL without changing business logic

## Project Structure

```
src/
├── domain/                 # Core business logic (innermost layer)
│   ├── entities/          # Business objects
│   ├── repositories/      # Interfaces for data access
│   └── use-cases/         # Application business rules
├── infrastructure/        # External concerns (outermost layer)
│   ├── database/         # Database implementation
│   ├── repositories/     # Repository implementations
│   └── web/             # HTTP/Express setup
├── interfaces/           # Controllers and presenters
│   ├── controllers/     # Handle HTTP requests
│   └── presenters/      # Format responses
└── main.js              # Dependency injection & app startup
