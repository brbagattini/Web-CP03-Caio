const produtos = [
  { nome: "Pão de Mel", preco: 8.5, categoria: "Doces", disponibilidade: true },
  { nome: "Coxinha", preco: 6, categoria: "Salgados", disponibilidade: true },
  { nome: "Refrigerante", preco: 5, categoria: "Bebidas", disponibilidade: false },
  { nome: "Brigadeiro", preco: 3, categoria: "Doces", disponibilidade: true },
  { nome: "Empada", preco: 7, categoria: "Salgados", disponibilidade: false },
  { nome: "Suco Natural", preco: 6, categoria: "Bebidas", disponibilidade: true },
  { nome: "Torta de Limão", preco: 10, categoria: "Doces", disponibilidade: true },
  { nome: "Pastel", preco: 5, categoria: "Salgados", disponibilidade: true },
  { nome: "Café", preco: 3, categoria: "Bebidas", disponibilidade: true },
  { nome: "Bolo de Cenoura", preco: 12, categoria: "Doces", disponibilidade: false },
];

const divProdutos = document.getElementById("produtos");

function listarProdutos(lista) {
  divProdutos.innerHTML = "";
  lista.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <strong>${produto.nome}</strong><br>
      Preço: R$ ${produto.preco.toFixed(2)}<br>
      Categoria: ${produto.categoria}<br>
      ${produto.disponibilidade ? "Disponível" : "Indisponível"}
    `;
    divProdutos.appendChild(div);
  });
}

document.getElementById("filtrar").addEventListener("click", () => {
  const categoriaSelecionada = document.getElementById("categoria").value;
  const somenteDisponiveis = document.getElementById("disponivel").checked;

  const filtrados = produtos.filter(produto => {
    const categoriaOk = categoriaSelecionada === "todas" || produto.categoria === categoriaSelecionada;
    const disponibilidadeOk = !somenteDisponiveis || produto.disponibilidade;
    return categoriaOk && disponibilidadeOk;
  });

  listarProdutos(filtrados);
});

document.getElementById("listarTodos").addEventListener("click", () => {
  listarProdutos(produtos);
});
