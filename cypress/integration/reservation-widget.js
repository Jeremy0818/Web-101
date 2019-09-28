describe('Reservation Widget', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Should generate the correct date values', () => {
    cy.get('.reservation-widget .dot-button').click();
    cy.wait(250);

    cy.get('#reservationForm').find('#daySelector option:nth-child(1)').invoke('text').then((text) => {
      const today = new Date();
      const tomorrow = new Date(today.setDate(today.getDate() + 1)).toString().substr(0, 10);
      expect(text).to.equal(tomorrow);      
    });

    cy.get('#reservationForm').find('#daySelector option:nth-child(2)').invoke('text').then((text) => {
      const today = new Date();
      const twoDaysFromNow = new Date(today.setDate(today.getDate() + 2)).toString().substr(0, 10);
      expect(text).to.equal(twoDaysFromNow);      
    });

    cy.get('#reservationForm').find('#daySelector option:nth-child(3)').invoke('text').then((text) => {
      const today = new Date();
      const threeDaysFromNow = new Date(today.setDate(today.getDate() + 3)).toString().substr(0, 10);
      expect(text).to.equal(threeDaysFromNow);      
    });

    cy.get('#reservationForm').find('#daySelector option:nth-child(4)').invoke('text').then((text) => {
      const today = new Date();
      const fourDaysFromNow = new Date(today.setDate(today.getDate() + 4)).toString().substr(0, 10);
      expect(text).to.equal(fourDaysFromNow);      
    });

    cy.get('#reservationForm').find('#daySelector option:nth-child(5)').invoke('text').then((text) => {
      const today = new Date();
      const fiveDaysFromNow = new Date(today.setDate(today.getDate() + 5)).toString().substr(0, 10);
      expect(text).to.equal(fiveDaysFromNow);      
    });
  });
});
