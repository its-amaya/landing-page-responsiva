document.addEventListener("DOMContentLoaded", function () {
    
    // --- FORMULÁRIO CADASTRO ---
    const formCadastro = document.getElementById("form-cadastro");
    
    if (formCadastro) {
        formCadastro.addEventListener("submit", function (e) {
            e.preventDefault(); // Impede o recarregamento da página
            
            let valid = true;        
            const nome = document.getElementById("cad-nome");
            const email = document.getElementById("cad-email");
            const senha = document.getElementById("cad-senha");
            
            // Validação do Campo Nome
            if (nome.value.trim() === "") {
                mostrarErro("erro-nome", "O nome é obrigatório.");
                valid = false;
            } else {
                limparErro("erro-nome");
            }
            
            // Validação do Campo E-mail
            if (!validarEmail(email.value)) {
                mostrarErro("erro-email", "Insira um e-mail válido.");
                valid = false;
            } else {
                limparErro("erro-email");
            }
            
            // Validação do Campo Senha
            if (senha.value.length < 6) {
                mostrarErro("erro-senha", "A senha deve ter pelo menos 6 caracteres.");
                valid = false;
            } else {
                limparErro("erro-senha");
            }
            
            // Sucesso na simulação de Cadastro
            if (valid) {
                mostrarModal(`Cadastro realizado com sucesso!\nSeja bem-vindo(a), ${nome.value}!`);
                formCadastro.reset();
            }
        });
    }

    // --- FORMULÁRIO SUGESTÕES ---
    const formContato = document.getElementById("form-contato");

    if (formContato) {
        formContato.addEventListener("submit", function (e) {
            e.preventDefault();
            
            let valid = true;
            const nome = document.getElementById("con-nome");
            const tipo = document.getElementById("con-tipo");
            const mensagem = document.getElementById("con-mensagem");

            // Validação do Nome de Contato
            if (nome.value.trim() === "") {
                mostrarErro("erro-con-nome", "Por favor, diga seu nome.");
                valid = false;
            } else {
                limparErro("erro-con-nome");
            }

            // Validação da seleção do Tipo
            if (tipo.value === "") {
                mostrarErro("erro-con-tipo", "Selecione o tipo de mensagem.");
                valid = false;
            } else {
                limparErro("erro-con-tipo");
            }

            // Validação do tamanho da Mensagem
            if (mensagem.value.trim().length < 10) {
                mostrarErro("erro-con-mensagem", "A mensagem deve conter pelo menos 10 caracteres.");
                valid = false;
            } else {
                limparErro("erro-con-mensagem");
            }

            // Sucesso na simulação de Mensagem
            if (valid) {
                mostrarModal(`Obrigado pelo contato, ${nome.value}! Sua mensagem foi enviada com sucesso.`);
                formContato.reset();
            }
        });
    }

    // --- FUNÇÕES AUXILIARES DE VALIDAÇÃO E ERROS ---
    function mostrarErro(idElemento, mensagem) {
        const erroSpan = document.getElementById(idElemento);
        if (erroSpan) {
            erroSpan.textContent = mensagem; // Corrigido bug de digitação antigo
        }
    }

    function limparErro(idElemento) {
        const erroSpan = document.getElementById(idElemento);
        if (erroSpan) {
            erroSpan.textContent = "";
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // --- MANIPULAÇÃO DO MODAL DE FEEDBACK ---
    const modal = document.getElementById("feedback-sistema");
    const txtFeedback = document.getElementById("feedback-texto");
    const btnFechar = document.getElementById("fechar-feedback");

    function mostrarModal(mensagem) {
        if (modal && txtFeedback) {
            txtFeedback.innerText = mensagem;
            modal.classList.remove("hidden"); // Remove a classe que oculta o modal
        }
    }

    if (btnFechar) {
        btnFechar.addEventListener("click", function() {
            modal.classList.add("hidden"); // Oculta o modal novamente
        });
    }

    // --- BOTÃO VOLTAR AO TOPO ---
    const btnTopo = document.getElementById("btn-topo");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            if (btnTopo) btnTopo.style.display = "block";
        } else {
            if (btnTopo) btnTopo.style.display = "none";
        }
    };

    if (btnTopo) {
        btnTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- TEMA ESCURO ---
    const btnTema = document.createElement("button");
    btnTema.innerText = "Alternar Tema";
    btnTema.style.position = "fixed";
    btnTema.style.bottom = "20px";
    btnTema.style.left = "20px";
    btnTema.style.padding = "10px 15px";
    btnTema.style.cursor = "pointer";
    btnTema.style.borderRadius = "5px";
    btnTema.style.backgroundColor = "#8257e5";
    btnTema.style.color = "white";
    btnTema.style.border = "none";
    btnTema.style.fontWeight = "600";
    btnTema.style.zIndex = "999";
    document.body.appendChild(btnTema);

    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
