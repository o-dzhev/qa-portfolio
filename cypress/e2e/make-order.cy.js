describe('Saucedemo order completion', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Select an item and place an order', () => {

        // Add 1st item in the cart and check it's shown on badge 
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible', '1');

        //Navigate to cart and check the item is there 
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="item-quantity"]').should('have.length', '1');
        cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack');

        //Click checkout and confirm the redirection
        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');
        cy.contains('Checkout: Your Information').should('be.visible');

        //Fill in the form and continue
        cy.get('[data-test="firstName"]').type('André');
        cy.get('[data-test="lastName"]').type('Silva Mota');
        cy.get('[data-test="postalCode"]').type('4400-710');
        cy.get('[data-test="continue"]').click();

        // Confirm order overview
        cy.contains('Checkout: Overview').should('be.visible');
        cy.contains('Description').should('be.visible');
        cy.contains('Payment Information').should('be.visible');
        cy.contains('Shipping Information').should('be.visible');
        cy.contains('Price Total').should('be.visible');
        cy.get('[data-test="cancel"]').should('be.visible');
        cy.get('[data-test="finish"]').should('be.visible');

        //Finish order
        cy.get('[data-test="finish"]').click();

        //Check confirmation page
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
        cy.get('[data-test="complete-text"]').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get('[data-test="back-to-products"]').should('be.visible');


    });
});
