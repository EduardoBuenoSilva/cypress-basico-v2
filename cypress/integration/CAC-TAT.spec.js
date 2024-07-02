/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() { // before each foi inserido para que toda vez que for rodar o teste, leia primeiro a pagina, antes de cada teste vai executar o comando.
        cy.visit('./src/index.html') // visita a pagina
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT') // verifica se o nome que está na aba está correto
    })

        //exercicio 1 
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste ' 
        
        cy.get('#firstName').type('Eduardo','delay')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(longText, {delay: 0}) // delay diminui o tempo de velocidade 
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

        //exercicio 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Eduardo','delay')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('teste@teste,com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

        //exercicio 3
    it('campo telefone continua vazio quando preenchido com valor não-numerico', function() {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value','')
    })

        //exercicio 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //exercicio 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Eduardo')
            .should('have.value', 'Eduardo')
            .clear()
            .should('have.value','')
        cy.get('#lastName')
            .type('Bueno')
            .should('have.value', 'Bueno')
            .clear()
            .should('have.value','')
        cy.get('#email')
            .type('teste@teste.com')
            .should('have.value', 'teste@teste.com')
            .clear()
            .should('have.value','')
        cy.get('#phone')
            .type('123456789')
            .should('have.value', '123456789')
            .clear()
            .should('have.value','')
    })

    //exercicio 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        
        cy.get('button[type="submit"]').click()
        
        cy.get('.error').should('be.visible')
    })

    //exercicio 7 - Criar Comandos customizados

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    //exercicio 8

    it('Contains', function() {
        cy.get('#firstName').type('Eduardo','delay')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type('Teste','Enviar') //escrever e procura o nome do botão e clica
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

//------------------------------ Seção 4 ------------------------------


    //Exercicio - Text
    it('Seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product') // Utilizar o ID para ser mais específico
          .select('YouTube')
          .should('have.value', 'youtube')
    })

    //Exercicio 1 - Value
    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
        .select('mentoria')
        .should('have.value','mentoria')
    })
    
    //Exercicio 2 - Indice
    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
        .select(1)
        .should('have.value','blog')
    })
    
//------------------------------ Seção 5 ------------------------------

    //Exercicio - Usar .check () para questões de semantica
    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value','feedback')
    })

    //Exercicio Extra
    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')  // seleciona todos
        .should('have.length', 3)      // faz uma contagem de quantos tem
        .each(function($radio) {        //encadeia o each para passar por cada um deles, no qual criamos a função que recebe cada um dos elementos
            cy.wrap($radio).check()    // wrap para empacotar os elementos e pode mandar comandos
            cy.wrap($radio).should('be.checked')
        })
    })

//------------------------------ Seção 6 ------------------------------

    // Exercicio 
    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    // Exercicio Extra
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Bueno')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    
})
