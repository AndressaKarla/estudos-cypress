/// <reference types="cypress" />

import seletores from '../../support/campo-treinamento-cypress/seletores'

/* alerts.cy.js
 *
 * Feature: Alerts
 *   Como um usuário do site Campo de Treinamento (Cypress)
 *   Quero executar alguns casos de testes 
 *   Para validar a feature de Alerts
 */

describe('Alert Simples', () => {
    context("Dado que eu acesse o site Campo de Treinamento (Cypress)", () => {
        beforeEach(() => {
            cy.visit(Cypress.env('baseUrl'))
        })

        context("Quando eu clicar no botão Alert", () => {
            it("Então deve ser apresentada a mensagem Alert Simples", () => {
                const msgEsperada = 'Alert Simples'
                const alert = seletores.ALERTS.ALERT
                const stub = cy.stub()

                cy.on(alert, stub)

                cy.clicarBotaoAlertSimples().then(() => {
                    const msgObtida = stub.getCall(0)

                    expect(msgObtida).to.be.calledWith(msgEsperada)
                })

                cy.wait(1000)
            })
        })
    })
})

