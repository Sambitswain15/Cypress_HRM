Cypress Automation Framework for Registration Page.

Welcome to the Cypress Automation Framework built specifically for automating the Registration Page. This repository showcases how to perform end-to-end (E2E) testing using Cypress with the Page Object Model (POM) design pattern. The framework is built to be modular, scalable, and easy to maintain.
🚀 Key Features

    Complete End-to-End Automation for testing the Registration Page

    Page Object Model (POM): A design pattern that ensures clean, reusable, and maintainable code for test cases

    GitHub Actions: Automate test execution with Continuous Integration/Continuous Deployment (CI/CD) pipelines

    Fixtures for Dynamic Data Handling: Use dynamic test data for flexibility in test scenarios

    Custom Commands: Extend Cypress functionality with custom commands for enhanced test automation

⚙️ Prerequisites

Before you begin, make sure you have the following tools installed:

    Node.js (version 14 or higher)

    npm (Node Package Manager)

🔨 Installation Guide

Follow these steps to set up the Cypress automation framework:

    Clone the Repository:

    Run the following command to clone the project:

git clone https://github.com/Sambitswain15/Cypress_HRM.git

Navigate to the Project Folder:

After cloning, go to the project directory:

cd Cypress_HRM

Install Dependencies:

Now, install the required dependencies using npm:

npm install

Run the Tests:

After installation, you can start running tests locally using:

    npm run test

📝 How it Works

    Page Object Model (POM):

        This framework is organized using the Page Object Model (POM), which helps maintain clean and modular test code by separating the page elements and test actions. Each page has its own object representing its elements and actions, allowing for easier updates and reusability across multiple tests.

    Fixtures:

        Test data is handled dynamically with Cypress Fixtures, allowing you to store and retrieve test data in a structured way for more flexible test cases.

    Custom Commands:

        Custom Cypress commands are used to simplify repetitive actions or extend Cypress functionality. You can easily define and reuse custom commands to improve readability and reduce code duplication.

🛠️ Running in CI/CD

    This framework is integrated with GitHub Actions for CI/CD.

    Every push to the repository will trigger an automated test execution pipeline, ensuring that your tests are always up to date with the latest changes in the project.
