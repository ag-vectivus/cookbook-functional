/// <reference types="cypress" />

describe('Video Modal (MaterializeCSS) behaviour', () => {
  it('Displays and close video modal on home page', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-testid="video-modal-trigger"]').first().click();
    cy.get('[data-testid=video-modal]').first().should('have.class', 'open');

    cy.wait(2 * 1000);
    cy.get('.modal-overlay').click({ force: true });
    cy.get('[data-testid=video-modal]')
      .first()
      .should('not.have.class', 'open');
  });

  it('Displays and close video modal on recipe page', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-testid="video-modal-link"]').first().click();
    cy.get('[data-testid="video-modal-trigger"]').click();

    cy.get('[data-testid=video-modal]').should('have.class', 'open');

    cy.wait(2 * 1000);
    cy.get('.modal-overlay').click({ force: true });

    cy.get('[data-testid=video-modal]').should('not.have.class', 'open');
  });
});
