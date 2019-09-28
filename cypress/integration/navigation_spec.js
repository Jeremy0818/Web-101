describe('Site Navigation', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Should navigate to About page', () => {
    cy.get('header').contains('About').click();
    cy.location('pathname').should('include', 'about.html');
  });

  it('Should navigate to Jobs page', () => {
    cy.get('header').contains('Jobs').click();
    cy.location('pathname').should('include', 'jobs.html');
  });

  it('Should navigate to Contact page', () => {
    cy.get('header').contains('Contact Us').click();
    cy.location('pathname').should('include', 'contact.html');
  });
});

describe('Mobile Navigation', () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit('index.html');
    cy.get('.hamburger-menu-wrapper').click();
  });

  afterEach(() => {
    cy.get('.hamburger-menu-wrapper').click();
  });

  it('Should navigate back to Home page', () => {
    cy.get('.mobile-flyout-nav').contains('Home').click();
    cy.location('pathname').should('include', 'index.html');
  });

  it('Should navigate to About page', () => {
    cy.get('.mobile-flyout-nav').contains('About').click();
    cy.location('pathname').should('include', 'about.html');
  });

  it('Should navigate to Jobs page', () => {
    cy.get('.mobile-flyout-nav').contains('Jobs').click();
    cy.location('pathname').should('include', 'jobs.html');
  });

  it('Should navigate to Contact page', () => {
    cy.get('.mobile-flyout-nav').contains('Contact Us').click();
    cy.location('pathname').should('include', 'contact.html');
  });
});