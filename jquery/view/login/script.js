$(document).ready(function () {
    $(".login-container").fadeIn(1200);

    //clique no botão

    $("#btnLogin").click(function () {
        let email = $("#email").val();
        let senha = $("#senha").val();

        //esconde mensagem antiga
        $("#mensagem").hide();

        if(email === "" || senha === "") {
            $("#mensagem")
            .removeClass("sucesso")
            .addClass("erro")
            .text("Preencha todos os campos")
            .fadeIn(500)

            $(".login-container")
            .animate({marginLeft: "-10px"}, 100)
            .animate({marginLeft: "10px"}, 100)
            .animate({marginLeft: "-10px"}, 100)
            .animate({marginLeft: "10px"}, 100)
            .animate({marginLeft: "0px"}, 100)
        } else {
            $("#mensagem")
                .removeClass("erro")
                .addClass("sucesso")
                .text("Login realizado com sucesso!")
                .fadeIn(500);

                $("#btnLogin")
                    .text("Entrando...")
                    .slideUp(200)
                    .slideDown(200)
        }


    })

})

function navCadastro() {
    window.location.href = "../registrar/registrar.html"
}