// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = function({Title, Description, Installation, Usage, Contributing, Tests, License, Github, Email}) {
  return (
`#${Title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

${Description}

## Installation

${Installation}

## Usage

${Usage}

## Contributing

${Contributing}

## Tests

${Tests}

## License

${License}

## Questions

If you have any questions please feel free to reach out to me through Github or email.

- https://github.com/${Github}

- ${Email}



`);
}

module.exports = generateMarkdown;
