# Web Development Workshop 101
## For U of A iGeek Student Group, February 23 - 24
For the finished website, please see https://kingstontest2.z5.web.core.windows.net/

## Deploying:
1. For simplicity, please copy the following files & folders to the `deployable` directory:
```
/images
/scripts
/styles
about.html
contact.html
favicon.ico
index.html
jobs.html
```
2. And then use Azure Tools within VSCode to push the `deployable` folder to Azure Static Website
+ For more information please see https://code.visualstudio.com/tutorials/static-website/getting-started

## Running Integration Tests:
1. Please ensure you have node environment setup (https://nodejs.org/en/download/)
2. Install JS dependencies
```
npm install
```
3. Run Cypress to start testing
```
npm run cypress
```
4. Explore the `/cypress/integration/` folder to see example tests written for this website.

## If you are falling behind:
1. Please select branch of the closest checkpoint to the workshop at https://github.com/kingstonfung/web101-class-project/branches/active
2. Without using git, you can download the entire project directory of the selected branch.
3. Unzip the file, and then you can contine on with the workshop session.
