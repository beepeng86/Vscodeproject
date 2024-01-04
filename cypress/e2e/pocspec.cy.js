/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('What to search?{enter}')
  })
}) 