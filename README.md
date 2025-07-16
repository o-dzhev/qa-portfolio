**Cypress test automation project**
This demo project contains e2e automated tests using Cypress for the sample e-commerce site [https://www.saucedemo.com](https://www.saucedemo.com).  

**To install**
1. Make sure you have **Node.js** and **npm** installed.
2. Install **Cypress** if you don't have it 
`npm install cypress --save-dev`
3. Clone the repository `https://github.com/o-dzhev/qa-portfolio.git`
4. Install project dependencies
`npm install`

**Project simplified structure**
cypress/
|-- downloads/              ← contains downloaded files
|-- e2e/                    ← test files 
|   |-- login.cy.js         ← login tests
|   |-- make-order.cy.js    ← place an order test
|-- fixtures/               ← test data 
|   |-- example.json
|   |-- users.json
|-- support/                ← reusable scripts
|   |-- commands.js         ← to store custom commands
|   |-- e2e.js              ← loads before tests exec
|-- node_modules/           ← modules for Cypress
|-- .gitignore              ← files to ignore
|-- cypress.config.js       ← Cypress configurations
|-- package-lock.json       ← determinism across all environments
|-- package.json            ← dependencies for Cypress
|-- README.md 

**To run tests**
1. Open Cypress from the project root, depending on the package manager you are using (if npm):
`npx cypress open`
- This will open the Cypress test runner
- You can choose a browser (e.g. Chrome)
- Click on Specs to run tests

