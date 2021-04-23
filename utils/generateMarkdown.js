// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licType = license; 
  let myLicense = '';
  if(licType === 'MIT') {
    myLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licType === 'GPLv3') {
    myLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licType === 'GPL') {
    myLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  }else if(licType === 'CC-0'){
    myLicense = `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)`
  } else {
    //license.license = "None"
  }
  return myLicense;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {
  return renderLicenseBadge(license);
 /* return `# ${data.title}

`;*/
}

module.exports = generateMarkdown;
