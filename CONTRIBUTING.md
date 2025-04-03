# Contributing to Image Enhancer

Thank you for your interest in contributing to Image Enhancer! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How to Contribute

### 1. Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Include a clear title and description
- Provide steps to reproduce the issue
- Include screenshots or error messages if applicable
- Specify your environment (browser, OS, etc.)

### 2. Suggesting Features

- Use the GitHub issue tracker to suggest features
- Provide a clear description of the feature
- Explain why this feature would be valuable
- Include mockups or examples if possible

### 3. Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Write or update tests if necessary
5. Ensure all tests pass
6. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add feature: your feature description"
   ```
7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. Open a Pull Request

### 4. Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write tests for new features

### 5. Frontend Development

- Use React functional components
- Follow the existing component structure
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper error handling
- Include loading states

### 6. Backend Development (Future)

- Follow REST API best practices
- Include proper error handling
- Add input validation
- Write unit tests
- Document API endpoints

### 7. Documentation

- Update README.md for significant changes
- Document new features
- Add comments to complex code
- Update API documentation if applicable

## Development Setup

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

### Backend (Future)

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line

Example:
```
Add user authentication feature

- Implement JWT authentication
- Add login/logout functionality
- Update user profile page

Fixes #123
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if needed
3. The PR must pass all CI checks
4. The PR must be reviewed by at least one maintainer
5. The PR must be approved before merging

## Questions?

If you have any questions about contributing, please:
- Open an issue
- Contact the maintainers
- Join our community chat (if available)

Thank you for contributing to Image Enhancer! 