# Zenith Commerce

A modern e-commerce and program listing platform built with React, TypeScript, and Tailwind CSS.

## Features

- **E-commerce Store**: Browse and purchase physical products.
- **Digital Programs**: Enroll in educational courses and masterclasses.
- **Shopping Cart**: Fully functional cart with local storage persistence.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Clean Architecture**: Modular components and separation of concerns.

## Tech Stack

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Deployment

This project is ready to be deployed to Vercel or any static hosting provider.

### Vercel

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Vite settings.
4.  Click **Deploy**.

## Project Structure

-   `src/components`: Reusable UI components.
-   `src/context`: Global state management (Cart).
-   `src/data`: Static data for products and programs.
-   `src/pages`: Route components.
-   `src/lib`: Utility functions.
