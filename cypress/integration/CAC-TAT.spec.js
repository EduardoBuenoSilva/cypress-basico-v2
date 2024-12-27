/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const Longtext = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste'
       
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('eduardoteste@hotmail.com')
        cy.get('#phone').type('5513912345678')
        cy.get('#open-text-area').should('be.visible').type(Longtext, { delay: 0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('eduardoteste@hotmail,com')
        cy.get('#phone').type('5513912345678')
        cy.get('#open-text-area').should('be.visible').type('Teste')
        cy.contains('button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
    })

    it('campo de telefone só aceita números', function() {
        cy.get('#phone')
        .type('abcd')
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('eduardoteste@hotmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').should('be.visible').type('Teste')
        cy.contains('button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
        .type('Eduardo')
        .should('have.value', 'Eduardo')
        .clear()
        .should('have.value', '')
        cy.get('#lastName')
        .type('Bueno')
        .should('have.value', 'Bueno')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('eduardoteste@hotmail.com')
        .should('have.value', 'eduardoteste@hotmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('5513912345678')
        .should('have.value', '5513912345678')
        .clear()
        .should('have.value', '')
    })
    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
        
        cy.get('.success').should('be.visible')
    })

})