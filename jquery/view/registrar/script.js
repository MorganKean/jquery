$(document).ready(function () {

    $(".register-container")
        .hide()
        .fadeIn(1200);

    $("#cadastrar").click(function () {

        let nome = $("#nome").val();
        let email = $("#email").val();
        let senha = $("#senha").val();
        let confiSenha = $("#confiSenha").val();

        $("#mensagem").hide();

        if (nome === "" || email === "" || senha === "" || confiSenha === "") {

            $("#mensagem")
                .removeClass("sucesso")
                .addClass("erro")
                .text("Preencha todos os campos")
                .fadeIn(500);

            $(".register-container")
                .animate({ marginLeft: "-10px" }, 100)
                .animate({ marginLeft: "10px" }, 100)
                .animate({ marginLeft: "-10px" }, 100)
                .animate({ marginLeft: "10px" }, 100)
                .animate({ marginLeft: "0px" }, 100);

        } else if (senha !== confiSenha) {

            $("#mensagem")
                .removeClass("sucesso")
                .addClass("erro")
                .text("As senhas não coincidem")
                .fadeIn(500);

            $(".register-container")
                .animate({ marginLeft: "-10px" }, 100)
                .animate({ marginLeft: "10px" }, 100)
                .animate({ marginLeft: "-10px" }, 100)
                .animate({ marginLeft: "10px" }, 100)
                .animate({ marginLeft: "0px" }, 100);

        } else {

            $("#mensagem")
                .removeClass("erro")
                .addClass("sucesso")
                .text("Cadastro realizado com sucesso!")
                .fadeIn(500);

            $("#cadastrar")
                .text("Cadastrando...")
                .slideUp(200)
                .slideDown(200);

        }

    });

    $("#voltar").click(function () {
        window.location.href = "../login/login.html";
    });

});