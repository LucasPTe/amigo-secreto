let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (!nome) return alert("Por favor, digite um nome antes de adicionar.");
    if (!amigos.includes(nome)) amigos.push(nome);
    
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length < 2) return alert("Adicione pelo menos dois amigos para realizar o sorteio.");
    exibirResultado(amigos[Math.floor(Math.random() * amigos.length)]);
}

function exibirResultado(sorteado) {
    document.getElementById("resultado").innerHTML = `<p>O amigo secreto tirado é: ${sorteado}</p>`;
}
