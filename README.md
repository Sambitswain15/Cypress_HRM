📋 Cypress Automation Framework for Registration Page

Welcome to the Cypress Automation Framework for the registration page. This repository demonstrates end-to-end (E2E) testing using Cypress with the Page Object Model (POM) design pattern for modular, scalable, and maintainable automation.
🚀 Features

    ✅ End-to-End Automation for the Registration Page

    ✅ Page Object Model (POM) for clean, reusable code

    ✅ GitHub Actions for CI/CD and automated test execution

    ✅ Dynamic data handling with Fixtures

    ✅ Custom commands for enhanced Cypress functionality

📂 Project Structure

├── .github/
│   └── workflows/
│       └── cypress.yml          # GitHub Actions workflow for CI/CD
├── cypress/
│   ├── fixtures/                # Test data for dynamic scenarios
│   │   └── register_data.json  # Sample data for registration tests
│   ├── support/                 # Custom commands and global settings
│   │   ├── commands.js          # Custom Cypress commands
│   │   └── e2e.js               # Test hooks and configurations
│   ├── pages/                   # Page Object Model (POM) structure
│   │   └── register_page.js     # POM for the registration page
│   └── e2e/                     # End-to-End test cases
│       └── RegisterUser.cy.js   # Test case for user registration
├── node_modules/                # Project dependencies
├── cypress.config.js            # Cypress configuration file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lock file for npm packages
└── README.md                    # Project documentation

⚙️ Prerequisites

    Node.js (v14 or higher)

    npm (Node Package Manager)

🔨 Installation

    Clone the repository:

git clone https://github.com/Sambitswain15/Cypress_HRM.git

Navigate to the project folder:

cd Cypress_HRM

Install dependencies:

npm install
