# Tempura Timer

A Rails application for timing tempura cooking.

## Technologies

- **Ruby on Rails** - Web framework
- **SQLite** - Database
- **Tailwind CSS** - Styling
- **Inertia.js** - Modern monolith approach with SPA-like experience
- **Node.js** - JavaScript runtime for asset compilation

## Prerequisites

- [mise](https://mise.jdx.dev/installing-mise.html) - for managing Ruby and Node.js versions

## Setup

1. **Install mise**

   Follow the installation instructions at [https://mise.jdx.dev/installing-mise.html](https://mise.jdx.dev/installing-mise.html)

2. **Install Ruby and Node.js**

   mise will automatically install the correct versions based on the project configuration:
   ```bash
   mise install
   ```

3. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

4. **Install JavaScript dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

5. **Setup the database**

   ```bash
   rails db:create db:migrate
   ```

6. **Start the development server**

   ```bash
   bin/dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## Development

- Run tests: `rails test`
- Rails console: `rails console`
- Database console: `rails dbconsole`
