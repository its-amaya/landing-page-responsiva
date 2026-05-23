document.addEventListener("DOMContentLoaded", function () {
    
    const formCadastro = document.getElementById("form-cadastro");
    
    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();
        
        let valid = true;        

        const nome = document.getElementById("cad-nome");
        const email = document.getElementById("cad-email");
        const senha = document.getElementById("cad-senha");
        
        if (nome.value.trim() === "") {
            mostrarErro("erro-nome", "O nome é obrigatório.");
            valid = false;
        } else {
            limparErro("erro-nome");
        }
        
        if (!validarEmail(email.value)) {
            mostrarErro("erro-email", "Insira um e-mail válido.");
            valid = false;
        } else {
            limparErro("erro-email");
        }
        
        if (senha.value.length < 6) {
            mostrarErro("erro-senha", "A senha deve ter pelo menos 6 caracteres.");
            valid = false;
        } else {
            limparErro("erro-senha");
        }
        
        if (valid) {
            mostrarModal(`Cadastro realizado com sucesso!\nSeja bem-vindo(a), ${nome.value}!`);
            formCadastro.reset();
        }
    });

    const formContato = document.getElementById("form-contato");

    formContato.addEventListener("submit", function (e) {
        e.preventDefault();
        
        let valid = true;
        const nome = document.getElementById("con-nome");
        const tipo = document.getElementById("con-tipo");
        const mensagem = document.getElementById("con-mensagem");

        if (nome.value.trim() === "") {
            mostrarErro("erro-con-nome", "Por favor, diga seu nome.");
            valid = false;
        } else {
            limparErro("erro-con-nome");
        }

        if (tipo.value === "") {
            mostrarErro("erro-con-tipo", "Selecione o tipo de mensagem.");
            valid = false;
        } else {
            limparErro("erro-con-tipo");
        }

        if (mensagem.value.trim().length < 10) {
            mostrarErro("erro-con-mensagem", "A mensagem deve conter pelo menos 10 caracteres.");
            valid = false;
        } else {
            limparErro("erro-con-mensagem");
        }

        if (valid) {
            mostrarModal(`Obrigado pelo contato, ${nome.value}! Sua sugestão/mensagem foi enviada ao sistema.`);
            formContato.reset();
        }
    });

    function mostrarErro(idElemento, mensagem) {
        const erroSpan = document.getElementById(idElemento);
        erroSpan.textContent = mensaje || mensagem;
    }

    function limparErro(idElemento) {
        const erroSpan = document.getElementById(idElemento);
        erroSpan.textContent = "";
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const modal = document.getElementById("feedback-sistema");
    const txtFeedback = document.getElementById("feedback-texto");
    const btnFechar = document.getElementById("fechar-feedback");

    function mostrarModal(mensagem) {
        txtFeedback.innerText = mensagem;
        modal.classList.remove("hidden");
    }

    btnFechar.addEventListener("click", function() {
        modal.classList.add("hidden");
    });

    const btnTopo = document.getElementById("btn-topo");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    };

    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const btnTema = document.createElement("button");
    btnTema.innerText = "Alternar Tema";
    btnTema.style.position = "fixed";
    btnTema.style.bottom = "20px";
    btnTema.style.left = "20px";
    btnTema.style.padding = "10px";
    btnTema.style.cursor = "pointer";
    btnTema.style.borderRadius = "5px";
    document.body.appendChild(btnTema);

    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
