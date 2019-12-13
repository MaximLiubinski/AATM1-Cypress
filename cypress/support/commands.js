Cypress.Commands.add("login", () => {
    cy.visit('https://web.demo.reportportal.io/ui/#')
    cy.get('input[type="text"]').clear().type('default')
    cy.get('input[type="password"]').clear().type('1q2w3e')
    cy.get('.rp-btn-login').click()
});
