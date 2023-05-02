/// <reference types="cypress" />

import seletores from '../../support/seu-barriga-react/seletores'

/* sair.cy.js
 *
 * Feature: Sair
 *   Como um usuário do site Seu Barriga React
 *   Quero executar alguns casos de testes 
 *   Para validar a feature de Sair
 */

describe('Sair', () => {
    context("Dado que eu esteja na página Home do site Seu Barriga React", () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login()
        })

        context("Quando eu clicar no menu settings e eu clicar no menu Sair", () => {
            beforeEach(() => {
                cy.acessarMenuSair()
            })

            it("Então deve ser apresentada a mensagem Até Logo!", () => {
                const msgEsperada = 'Até Logo!'

                cy.get(seletores.MSG.DESCRICAO)
                    .should('be.visible')
                    .should('contain', msgEsperada)

                cy.url().should('include', `${Cypress.config('baseUrl')}/login`)

                cy.wait(1000)
            })
        })
    })
})

