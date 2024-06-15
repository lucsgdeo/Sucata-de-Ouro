function pegarDados(){
    var nome = document.querySelector("#nome").value
    var telefone = document.querySelector("#telefone").value
    var email = document.querySelector("#email").value
    var senha = document.querySelector("#senha").value

    if(vazio(nome, telefone, email, senha)){
        alert("Preencha todos os campos")
        return
    }

    cadastrarUsuario(nome, telefone, email, senha)    
}

function vazio(nome, telefone, email, senha){
    if(email.trim() === "" || senha.trim() === "" || nome.trim() === "" || telefone.trim() === "")  {
        return true;
    }
    return false;
}


function cadastrarUsuario(nome, telefone, email, senha) {
    // Verifica se já existe algum dado cadastrado
    var usuarios = localStorage.getItem("banco");
    usuarios = usuarios ? JSON.parse(usuarios) : [];

    // Cria um novo objeto com os dados do usuário
    var novoUsuario = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
    };

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);

    // Salva o array de usuários de volta no localStorage
    localStorage.setItem("banco", JSON.stringify(usuarios));

    // Mensagem de sucesso
    alert("Usuário cadastrado com sucesso!");
    window.location.assign("../usuario.html")
}
