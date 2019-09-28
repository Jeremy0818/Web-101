describe('Overall Site', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Should not display the hamburger menu on large viewports', () => {
    cy.viewport(1920, 1080);
    cy.get('.hamburger-menu-wrapper').should('not.be.visible');
  });

  it('Should display the hamburger menu on small viewports', () => {
    cy.viewport(375, 667);
    cy.get('.hamburger-menu-wrapper').should('be.visible');
  });

  it('Should not be horizontally scrollable on desktops', () => {
    cy.viewport(1920, 1080);
    cy.scrollTo(10000, 10000);
    expect(window.scrollX).to.equal(0);
  });

  it('Should not be horizontally scrollable on mobile', () => {
    cy.viewport(375, 667);
    cy.scrollTo(10000, 10000);
    expect(window.scrollX).to.equal(0);
  });
});
