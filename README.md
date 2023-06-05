# Automated Testing for telnyx.com using Cypress

This project is an automated testing suite for the website [Telnyx](https://telnyx.com/), written in Cypress and Cucumber using JavaScript. The [Report](https://avatarass.github.io/WDIO_Telnyx/) made via Allure reporter. These tests cover various features of the Telnyx website, including video playback, logo display, button functionality and href attributes, form validation, title naming, search functionality, and checkbox filtering in different sections of the website.

### Technology
- [WebdriverIO](https://webdriver.io/)
- [allure](https://docs.qameta.io/allure-report/)

### Project Setup

To set up the automated tests in this project, follow these steps:
1. Clone this repository to your local machine.
    - Open the terminal or command prompt on your machine.
    - Navigate to the directory where you want to download the repository.
    - Run the following command: 
    ```git clone https://github.com/AvatarasS/WDIO_Telnyx```.
    - Once complete, the repository will be downloaded to the directory you specified.
2. Navigate to the project directory:
    ```cd repository-name```
3. Install all packages and dependencies using npm:
    ```npm install```


### Running Tests

- Run ```npm run wdio``` to run headed tests in chrome.
- Run ```npm run test:docker``` to start the test with docker.

### Notes

- Link to the GitHub Pages with test report generated via Allure reporter: (https://avatarass.github.io/WDIO_Telnyx/).
- The test cases can be found in the `test_cases/TestCaseTelnyx.xlsx` directory.
- The page object models can be found in the `test/pageobjects/` directory.
- The specs can be found in the `test/specs/` directory.