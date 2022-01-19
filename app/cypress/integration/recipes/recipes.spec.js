/// <reference types="cypress" />

describe('Recipes', () => {
  it('Links work and related recipes', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-testid="desktop-nav-recipes"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes');
    });

    cy.contains('Dessert').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert');
    });
    cy.get('[data-testid="recipe-card-link"]').should('have.length', 3);

    cy.contains('Pancakes').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert/52854');
    });

    cy.contains('Chocolate Souffle').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert/52905');
    });

    cy.get('[href="/recipes/dessert"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert');
    });
    cy.get('[data-testid="recipe-card-link"]').should('have.length', 3);
  });

  it('Latest and related recipes', () => {
    cy.visit('http://localhost:8000/');

    cy.get('[data-testid="recipe-card-link"]').first().click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert/52923');
    });

    cy.contains('CookBook').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/');
    });

    cy.get('[data-testid="popular-recipe"]').first().click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/recipes/dessert/52854');
    });

    cy.contains('CookBook').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8000/');
    });
  });
});
