const form = document.querySelector("#form")
const nameInput = document.querySelector("#Name")
const emailInput = document.querySelector("#email")
const titleInput = document.querySelector("#titulo")
const categoryInput = document.querySelector("#categoria")
const messageTextArea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica nome = vazio

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome")
        return;
    }

    //verifica email

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email")
        return;
    }

    //verifica categoria
    if(categoryInput.valeu === ""){
        alert("Por favor, selecione uma categoria")
        return;
    }

    //verifica mensage preenchida
    if(messageTextArea.valeu === ""){
        alert("Por favor, escreva algo sobre sua petição")
    }

    //Se estiver tudo ok, então:

    form.submit();

})


//function validar email

function isEmailValid(email){

    //criando regex para validar
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    }

        return false
}

