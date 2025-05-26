const filmes = [
  {
    titulo: "Matrix (1999)",
    descricao:
      "Um hacker descobre a verdade sobre sua realidade e seu papel na guerra contra seus controladores.",
    imagem: "imagens/Matrix.jpg",
  },
  {
    titulo: "Logan (2017)",
    descricao:
      "Em um futuro próximo, um Logan envelhecido cuida do Professor X enquanto foge de um grupo de vilões.",
    imagem: "imagens/Logan_.jpg",
  },
  {
    titulo: "Batman: O Cavaleiro das Trevas (2008)",
    descricao:
      "Batman enfrenta o Coringa em uma luta por Gotham e pela alma de seus cidadãos.",
    imagem: "imagens/batman.jpg",
  },
  {
    titulo: "O Exterminador do Futuro 2: O Julgamento Final (1991)",
    descricao:
      "Um ciborgue é enviado para proteger John Connor do exterminador T-1000.",
    imagem: "imagens/O_exterminador_do_futuro.jpeg",
  },
  {
    titulo: "Pantera Negra (2018)",
    descricao:
      "T'Challa retorna a Wakanda como rei, mas enfrenta inimigos internos e externos.",
    imagem: "imagens/pantera_negra.jpg",
  },
  {
    titulo: "Interestelar (2014)",
    descricao:
      "Exploradores viajam por um buraco de minhoca em busca de um novo lar para a humanidade.",
    imagem: "imagens/interstellar.jpg",
  },
  {
    titulo: "Projeto X - Uma Festa Fora de Controle (2012)",
    descricao:
      "Três adolescentes organizam uma festa épica que sai totalmente do controle.",
    imagem: "imagens/projeto_x.jpg",
  },
  {
    titulo: "Vingadores: Ultimato (2019)",
    descricao:
      "Os Vingadores tentam desfazer os eventos catastróficos causados por Thanos.",
    imagem: "imagens/ultimato.jpg",
  },
  {
    titulo: "Vingadores: Guerra Infinita (2018)",
    descricao:
      "Os heróis do universo Marvel enfrentam Thanos em uma batalha épica.",
    imagem: "imagens/guerra_infinita.jpg",
  },
  {
    titulo: "Anjos da Lei 2 (2014)",
    descricao:
      "Schmidt e Jenko se infiltram na faculdade para desvendar um novo caso.",
    imagem: "imagens/anjos_da_lei.jpg",
  },
];

const lista = document.getElementById("filme-lista");

filmes.forEach((filme, index) => {
  const item = document.createElement("li");
  item.className = "filme-item";
  item.innerHTML = `${filme.titulo}`;

  const detalhes = document.createElement("div");
  detalhes.className = "filme-detalhes";

  detalhes.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <p>${filme.descricao}</p>
    `;

  item.addEventListener("click", () => {
    const allDetails = document.querySelectorAll(".filme-detalhes.open");
    const allItems = document.querySelectorAll(".filme-item.active");

    allDetails.forEach((detail) => {
      if (detail !== detalhes) {
        detail.classList.remove("open");
      }
    });

    allItems.forEach((activeItem) => {
      if (activeItem !== item) {
        activeItem.classList.remove("active");
      }
    });

    detalhes.classList.toggle("open");
    item.classList.toggle("active");
  });

  item.appendChild(detalhes);
  lista.appendChild(item);
});
