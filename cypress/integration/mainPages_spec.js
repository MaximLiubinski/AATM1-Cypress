import '../support/commands'

describe('RP Main Pages', function() {
    it('Dashboard Page', function() {
        cy.login()
        cy.get('#dashboard').click()
        cy.get('#dashboard').should('have.class', 'active')
        cy.url().should('include', 'dashboard')
    })

    it('Launches Page', function() {
        cy.login()
        cy.get('#launches').click()
        cy.get('#launches').should('have.class', 'active')
        cy.url().should('include', 'launches')
    })

    it('Filters Page', function() {
        cy.login()
        cy.get('#filters').click()
        cy.get('#filters').should('have.class', 'active')
        cy.url().should('include', 'filters')
    })

    it('Debug Page', function() {
        cy.login()
        cy.get('#userdebug').click()
        cy.get('#userdebug').should('have.class', 'active')
        cy.url().should('include', 'userdebug')
    })
});