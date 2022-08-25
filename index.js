// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
inquirer

    .prompt([
    {
        type: "input",
        name: "Title",
        message: "Enter Project title"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter project description"
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter how users can install your project"
    },
    {
        type: "input",
        name: "Usage",
        message: "describe how users can use your application"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Describe the contribution guidelines for your application"
    },
    {
        type: "input",
        name: "Tests",
        message: "Instruct user how to test your application"
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT license", "Boost Software License 1.0", "Eclipse Public License 2.0"]
    },
    {
        type: "input",
        name: "Github",
        message: "Enter Github username"
    },
    {
        type: "input",
        name: "Email",
        message: "Enter email address"
    }

])

    .then ((response) => {
    console.log(response)
    const markdown = generateMarkdown(response)
    fs.writeFile("./dist/README.md", markdown, (err) => err ? console.log("You missed some fields, please start over") : console.log("README created"))
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
