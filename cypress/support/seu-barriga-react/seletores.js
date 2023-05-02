const seletores = {
    LOGIN: {
        EMAIL: 'input[placeholder="seu@email.com"]',
        SENHA: '[data-test=passwd]',
        BOTAO_ENTRAR: '.jumbotron > button[type="submit"]'
    },
    HOME: {
        ICONE_CARTEIRA: 'a[class="navbar-brand"] > img'
    },
    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        SAIR: 'a[href="/logout"]',
    },
    MSG: {
        IDENTIFICAR: '.container .toast-top-right',
        DESCRICAO: '.toast-message',
        OPCAO_FECHAR: '.container .toast .toast-close-button'
    }
}

export default seletores