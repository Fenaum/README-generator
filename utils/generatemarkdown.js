function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  }
  return `[License](https://img.shields.io/badge/License-${license}-brightgreen)`
}

function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  return `[${license}](https://opensource.org/licenses/${license})`
}

function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  return `
    ## License
    This project is licensed under the ${renderLicenseLink(license)} License.
    `;
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testings}

  ## Questions

  If you have any questions, feel free to reach out via GitHub or email:

  GitHub: [${data.github}](https://github.com/${data.github})

  Email: ${data.email}
  `;
};

module.exports = generateMarkdown;