function pegarDados(){
    var email = document.querySelector("#email").value
    var senha = document.querySelector("#password").value
    consultaDados(email, senha)
}

function consultaDados(email, senha) {
    var banco = JSON.parse(localStorage.getItem("banco"))

    if (vazio(email, senha)) {
        alert("Preencha todos os campos")
        return;
    }
    
    for(let i = 0; i < banco.length; i++){
        if(email === banco[i].email) {
            if(senha === banco[i].senha){
                alert("Login Efetuado");
                window.location.assign("../index.html")
                return 
            }
        }
    }
    
    alert("Email ou senha incorretos")
}

function vazio(email, senha){
    if(email.trim() === "" || senha.trim() === "") {
        return true
    }
    return false
}
