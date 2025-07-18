describe('Saucedemo login tests', () => {
    let users;
    let randomUser;

    before(() => {
        // Load all users from fixture
        cy.fixture('users').then((data) => {
            users = data;

            // Get the keys and pick one randomly
            const userTypes = Object.keys(users);
            const randomKey = userTypes[Math.floor(Math.random() * userTypes.length)];

            // Store the randomly selected user
            randomUser = users[randomKey];

            cy.log(`Using random user: ${randomKey}`);
        });
    });

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
    });

    it('logs in with a random valid user', () => {
        cy.get('[data-test="username"]').type(randomUser.username);
        cy.get('[data-test="password"]').type(randomUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');

    });

    it('log in fails with invalid username', () => {
        cy.get('[data-test="username"]').type('invalid');
        cy.get('[data-test="password"]').type(randomUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('log in fails with invalid password', () => {
        cy.get('[data-test="username"]').type(randomUser.username);
        cy.get('[data-test="password"]').type('000000');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('log in fails with invalid username & password', () => {
        cy.get('[data-test="username"]').type('invalid');
        cy.get('[data-test="password"]').type('000000');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('log in fails with empty fields', () => {
        cy.get('[data-test="login-button"]').click();
        cy.contains('Epic sadface: Username is required').should('be.visible');

    });

    it('locked user sees custom error message trying to log in', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type(randomUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');

    });
});
