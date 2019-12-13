
describe('RP Smoke', function() {
    it('Login', function() {
        cy.visit('https://web.demo.reportportal.io/ui/#')
        cy.get('input[type="text"]').clear().type('default')
        cy.get('input[type="password"]').clear().type('1q2w3e')
        cy.get('.rp-btn-login').click()
        cy.url().should('include', 'launches')
    })

    it('Wrong Login', function() {
        cy.visit('https://web.demo.reportportal.io/ui/#')
        cy.get('input[type="text"]').clear().type('default123')
        cy.get('input[type="password"]').clear().type('1q2w3e')
        cy.get('.rp-btn-login').click()
        cy.get('.message-fade').should('be.visible')
        cy.contains('Bad credentials').should('be.visible')
    })

});