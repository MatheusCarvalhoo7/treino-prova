// array pra guardar os gastos
let gastos = [];


// pega o formulário
const form = document.getElementById("formGasto");

// pega lista e total
const lista = document.getElementById("lista-gastos");
const totalElemento = document.getElementById("total");


// quando enviar o formulário
form.addEventListener("submit", function(e){

    e.preventDefault(); // evita recarregar a página

    // pega os valores digitados
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;

    // validação simples (não deixa vazio)
    if(descricao === "" || isNaN(valor) || categoria === ""){
        alert("Preencha todos os campos");
        return;
    }

    // cria objeto do gasto
    const gasto = {
        descricao: descricao,
        valor: valor,
        categoria: categoria
    };

    // adiciona no array
    gastos.push(gasto);

    // atualiza a lista e o total
    atualizar();

    // limpa os inputs
    form.reset();
});


// função que atualiza a tela
function atualizar(){

    lista.innerHTML = ""; // limpa a lista antes de atualizar

    let total = 0;

    // percorre todos os gastos
    gastos.forEach(function(gasto, index){

        total += gasto.valor;

        // cria item da lista
        const li = document.createElement("li");

        // texto do item
        li.textContent = gasto.descricao + " - " + gasto.categoria + " - R$ " + gasto.valor.toFixed(2);

        // botão para remover
        const btn = document.createElement("button");
        btn.textContent = "X";

        // quando clicar, remove o item
        btn.onclick = function(){
            remover(index);
        };

        // adiciona botão no item
        li.appendChild(btn);

        // adiciona item na lista
        lista.appendChild(li);
    });

    // atualiza o total na tela
    totalElemento.textContent = "Total: R$ " + total.toFixed(2);
}


// função para remover item
function remover(index){
    gastos.splice(index, 1); // remove do array
    atualizar(); // atualiza a tela
}