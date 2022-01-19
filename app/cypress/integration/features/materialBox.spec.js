/// <reference types="cypress" />

describe('MaterialBox (MaterializeCSS) behaviour', () => {
  it('Displays and close material box on home page', () => {
    cy.visit('http://localhost:8000/');

    // click
    cy.get('.circle').first().click();
    cy.get('.circle').first().should('have.class', 'active');

    cy.wait(1 * 1000);

    cy.get('#materialbox-overlay').click({ force: true });
    cy.get('.circle').first().should('not.have.class', 'active');

    // scroll
    cy.get('.circle').first().click();
    cy.get('.circle').first().should('have.class', 'active');

    cy.wait(1 * 1000);

    cy.scrollTo(0, 0);
    cy.get('.circle').first().should('not.have.class', 'active');
  });

  it('Displays and close material box on recipe page', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-testid="recipe-card-link"]').first().click();

    // click
    cy.get('.image').first().click();
    cy.get('.image').first().should('have.class', 'active');

    cy.wait(1 * 1000);

    cy.get('#materialbox-overlay').click({ force: true });
    cy.get('.image').first().should('not.have.class', 'active');

    // scroll
    cy.get('.image').first().click();
    cy.get('.image').first().should('have.class', 'active');

    cy.wait(1 * 1000);

    cy.scrollTo(0, 0);
    cy.get('.image').first().should('not.have.class', 'active');
  });
});
