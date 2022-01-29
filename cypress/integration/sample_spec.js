import cy from 'cypress';

describe('My Third Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000');
  });
});
