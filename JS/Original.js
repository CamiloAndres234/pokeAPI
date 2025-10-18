function Original() {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Limpiar pantalla

  // Contenedor principal
  const contenedor = document.createElement("section");
  contenedor.classList.add("info-app");

  // Logo principal
  const logo = document.createElement("img");
  logo.src = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  logo.alt = "Logo PokeAPI";
  logo.classList.add("logo-app");

  // Imagen decorativa (Ash y Pikachu)
  const banner = document.createElement("img");
  banner.src = "https://www.nicepng.com/png/full/99-992153_ash-and-pikachu-butterfree-pokemon-pikachu-y-ash.png";
  banner.alt = "Ash y Pikachu";
  banner.classList.add("banner-poke");

  // Título
  const titulo = document.createElement("h2");
  titulo.textContent = "PokeAPI - Proyecto Pokémon";

  // Descripción general
  const descripcion = document.createElement("p");
  descripcion.innerHTML = `
    Bienvenido a la <b>PokeAPI App</b>, una aplicación desarrollada por <b>Camilo Andres Alarcón Mendoza</b>.<br>
    Aquí podrás explorar todos los Pokémon, descubrir sus estadísticas, tipos y habilidades.<br>
    ¡Agrega tus favoritos y conviértete en un verdadero Maestro Pokémon! ⚡
  `;

  // Contenedor de tarjetas informativas
  const contenedorTarjetas = document.createElement("div");
  contenedorTarjetas.classList.add("tarjetas-info");

  // Tarjetas de información
  const tarjetas = [
    {
      titulo: "🎯 Objetivo",
      texto:
        "Ofrecer una interfaz divertida y funcional que permita interactuar con la API de Pokémon, mostrando información detallada de cada especie.",
    },
    {
      titulo: "⚙️ Funcionalidades",
      texto:
        "🔹 Búsqueda por nombre o tipo<br>🔹 Filtrado por categoría<br>🔹 Detalles completos de cada Pokémon<br>🔹 Sistema de favoritos guardado en el navegador.",
    },
    {
      titulo: "💻 Tecnologías",
      texto:
        "HTML, CSS y JavaScript puro.<br>La app consume datos desde la <a href='https://pokeapi.co/' target='_blank'>PokeAPI</a> mediante peticiones fetch.",
    },
    {
      titulo: "👨‍💻 Desarrollador",
      texto:
        "Creado por <b>Camilo Andres Alarcón Mendoza</b> como proyecto educativo para explorar APIs y mejorar habilidades de programación web.",
    },
  ];

  // Crear y añadir las tarjetas
  tarjetas.forEach((info) => {
    const card = document.createElement("div");
    card.classList.add("tarjeta");
    const h3 = document.createElement("h3");
    h3.textContent = info.titulo;
    const p = document.createElement("p");
    p.innerHTML = info.texto;
    card.appendChild(h3);
    card.appendChild(p);
    contenedorTarjetas.appendChild(card);
  });

  // Añadir todos los elementos al contenedor principal
  contenedor.appendChild(logo);
  contenedor.appendChild(banner);
  contenedor.appendChild(titulo);
  contenedor.appendChild(descripcion);
  contenedor.appendChild(contenedorTarjetas);

  // Mostrar en pantalla
  root.appendChild(contenedor);
}
