/// <reference types="cypress" />
import seletores from './seletores'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.log(`Ambiente >> ${Cypress.env('environment') ? Cypress.env('environment') : 'prod'}`)

    if (Cypress.env('environment') === 'qa') {
        Cypress.env('usuario', Cypress.env('env_usuario_qa'))
    }

    else {
        Cypress.env('usuario', Cypress.env('env_usuario_prod'))
    }

    cy.get(seletores.LOGIN.EMAIL).as('campoEmail')
    cy.get(seletores.LOGIN.SENHA).as('campoSenha')
    cy.get(seletores.LOGIN.BOTAO_ENTRAR).as('botaoEntrar')

    cy.get('@campoEmail')
        .should('be.visible')
        .type(Cypress.env('usuario').env_email, { log: false })

    cy.get('@campoSenha')
        .should('be.visible')
        .type(Cypress.env('usuario').env_senha, { log: false })

    cy.get('@botaoEntrar')
        .should('be.visible')
        .click()

    cy.get(seletores.HOME.ICONE_CARTEIRA)
        .should('be.visible')
})

Cypress.Commands.add('acessarMenuSair', () => {
    cy.get(seletores.MSG.OPCAO_FECHAR).as('opcaoFecharMsg')
    cy.get(seletores.MSG.IDENTIFICAR).as('identificarMsg')
    cy.get(seletores.MENU.SETTINGS).as('menuConfiguracoes')
    cy.get(seletores.MENU.SAIR).as('menuSair')

    cy.get('@opcaoFecharMsg')
        .should('be.visible')
        .click({ multiple: true })

    cy.get('@identificarMsg')
        .should('not.be.visible')

    cy.get('@menuConfiguracoes')
        .should('be.visible')
        .click()

    cy.get('@menuSair')
        .should('be.visible')
        .click()
})