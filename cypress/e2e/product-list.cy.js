describe('Product list validation', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('contain', '/inventory.html');
    });

    it('the products title exists', () => {
        cy.get('[data-test="title"]').should('exist')
            .and('have.text', 'Products')
    });

    it('the product item(s) are present in the list', () => {
        cy.get('[data-test="inventory-item"]').should('exist')
            .and('have.length.gt', 0)
    });

    it('the product item contains the necessary information', () => {
        cy.get('[data-test="inventory-item"]').each(($item) => {
            cy.get($item).find('[data-test="inventory-item-name"]').should('exist')
            cy.get($item).find('[data-test="inventory-item-description"]').should('exist')
            cy.get($item).find('[data-test="inventory-item-price"]').should('exist')
            cy.get($item).find('img').should('be.visible')
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').and('have.text', 'Add to cart')
        })
    });

});