Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Eduardo','delay')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('eduardobueno08@gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
})