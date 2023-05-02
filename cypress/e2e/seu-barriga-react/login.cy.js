/// <reference types="cypress" />

import seletores from '../../support/seu-barriga-react/seletores'

/* login.cy.js
 *
 * Feature: Login
 *   Como um usuário do site Seu Barriga React
 *   Quero executar alguns casos de testes 
 *   Para validar a feature de Login
 */

describe('Login', () => {
    context("Dado que eu esteja na página de Login do site Seu Barriga React", () => {
        beforeEach(() => {
            cy.visit('/')
        })

        context("Quando eu informar os campos e eu clicar no botão Entrar", () => {
            beforeEach(() => {
                cy.login()
                cy.get(seletores.HOME.ICONE_CARTEIRA)
                    .should('be.visible')
            })

            it("Então deve ser apresentada a mensagem Bem vindo", () => {
                const msgEsperada = 'Bem vindo'

                cy.get(seletores.MSG.DESCRICAO)
                    .should('be.visible')
                    .should('contain', msgEsperada)

                cy.wait(1000)
            })
        })
    })
})

