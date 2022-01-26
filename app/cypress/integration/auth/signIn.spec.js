/// <reference types="cypress" />

describe('Sign In behaviour', () => {
  it('Sign In, show my recipes and log out', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-tooltip="Sign in"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/signin');
    });

    cy.get('#email').type('spock@mock.com', { force: true });
    cy.get('#password').type('spock123', { force: true });
    cy.get('button').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/');
    });

    cy.get('[data-testid="desktop-nav-my-recipes"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/myrecipes');
    });
    cy.get('[data-testid="recipe-card-link"]').should('have.length', 2);

    cy.get('[data-testid="desktop-nav-add-recipe"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/add');
    });

    cy.get('[data-tooltip="Log out"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/');
    });
  });
});
