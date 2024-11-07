const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const inputId = document.getElementById("pizza-id");
const buscarBtn = document.getElementById("buscar-pizza");
const resultado = document.getElementById("resultado");

function renderizarPizza(pizza) {
  resultado.innerHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="Imagen de ${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
    </div>
  `;
}

function renderizarError(mensaje) {
  resultado.innerHTML = `<p class="error">${mensaje}</p>`;
}

buscarBtn.addEventListener("click", () => {
  const id = parseInt(inputId.value);

  if (isNaN(id)) {
    renderizarError("Por favor, ingresa un número válido.");
    return;
  }

  const pizza = pizzas.find(pizza => pizza.id === id);
  
  if (pizza) {
    renderizarPizza(pizza);
    localStorage.setItem("ultimaPizza", JSON.stringify(pizza));
  } else {
    renderizarError("No se encontró ninguna pizza con ese ID.");
  }
});

window.addEventListener("load", () => {
  const ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizza"));
  if (ultimaPizza) {
    renderizarPizza(ultimaPizza);
  }
});