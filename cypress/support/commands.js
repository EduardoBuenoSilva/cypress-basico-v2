Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Bueno')
    cy.get('#email').type('eduardoteste@hotmail.com')
    cy.get('#phone').type('5513912345678')
    cy.get('#open-text-area').should('be.visible').type('Teste')
    cy.contains('button', 'Enviar').click()
})