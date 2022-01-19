/// <reference types="cypress" />

describe('Scroll Up button behaviour', () => {
  it('Scroll Up Button appears and disappears after onclick', () => {
    cy.visit('http://localhost:8000/');

    cy.get('.scroll-button').should('have.class', 'scale-out');
    cy.wait(1 * 1000);

    cy.scrollTo(0, 1000);
    cy.wait(1 * 1000);

    cy.get('.scroll-button').should('have.class', 'scale-in');

    cy.get('.scroll-button').click();

    cy.get('.scroll-button').should('have.class', 'scale-out');
  });
});
