var esFavorito = false;  // Color del corazón (Rojo o Blanco)

// Función para agregar o quitar un Pokémon de favoritos
function toggleFavorito(paramid, paramname) {

    // Leer favoritos actuales desde localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = false

    // Verificar si ya está guardado
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
    }

    //Guardado o eliminación de favoritos (por medio de arrays)
    if (existe == true) {
        favoritos = favoritos.filter(poke => poke.name !== paramname); // Valida si el parametro es igual al objeto guardado
        esFavorito = false;
    } else {
        // Si no está, agregarlo
        favoritos.push({
            name: paramname,
            url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
        });
        esFavorito = true;
    }

    // Guardar el array actualizado en localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Actualizar el icono en pantalla (si existe el botón)
    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

async function Detalle(parametro) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();

    // Revisar si este Pokémon ya está en favoritos
    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(poke => poke.name === data.name);

    // Tipos
    let tipoPoke = "";
    for (let i = 0; i < data.types.length; i++) {
        tipoPoke += `<span>${data.types[i].type.name}</span> `;
    }

    // HTML del detalle
    const detalle = `
    <section class="c-detalle">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
           alt="${data.name}" height="120" width="auto">
      <p>${data.name}</p>
      <p>ID: ${data.id}</p>
      <p>${tipoPoke}</p>
      <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
      <p>HP: ${data.stats[0].base_stat}</p>
      <p>Velocidad: ${data.stats[5].base_stat}</p>
      <p>Ataque: ${data.stats[1].base_stat} / Defensa: ${data.stats[2].base_stat}</p>
      <p>Ataque Especial: ${data.stats[3].base_stat} / Defensa Especial: ${data.stats[4].base_stat}</p>

      <button onClick="toggleFavorito(${data.id}, '${data.name}')">
        <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>
    </section>
  `;

    root.innerHTML = detalle;
}

// Extra xd 
function Informativa() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section class="info-app">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeAPI" class="logo-app">

      <h2>📘 Guía del Entrenador Pokémon</h2>
      <p>
        Aquí encontrarás información útil sobre cómo aprovechar al máximo la 
        <strong>PokéAPI App</strong> — desde buscar Pokémon, hasta gestionar tus favoritos y descubrir sus habilidades. ⚡
      </p>

      <div class="tarjetas-info">

        <div class="tarjeta">
          <h3>🔍 Búsqueda Pokémon</h3>
          <p>
            Puedes buscar Pokémon por <strong>nombre</strong> o <strong>tipo</strong>.  
            La app mostrará sus estadísticas, habilidades y su imagen oficial de la PokéAPI.
          </p>
        </div>

        <div class="tarjeta">
          <h3>💛 Favoritos</h3>
          <p>
            Al hacer clic en el botón <strong>❤️ Favorito</strong>, puedes guardar tus Pokémon preferidos.  
            Se almacenan en el navegador mediante <strong>LocalStorage</strong>, así que no se pierden al cerrar la página.
          </p>
        </div>

        <div class="tarjeta">
          <h3>⚔️ Tipos y habilidades</h3>
          <p>
            Cada Pokémon posee uno o dos tipos que determinan su desempeño en batalla.  
            Explora sus <strong>movimientos</strong> y <strong>habilidades especiales</strong> en el detalle.
          </p>
        </div>

        <div class="tarjeta">
          <h3>🧠 Consejos del Profesor Oak</h3>
          <p>
            🌿 Experimenta con los filtros y descubre especies únicas.<br>
            💾 Guarda tus favoritos y mantén tu Pokédex actualizada.<br>
            🔥 ¡Atrápalos a todos y conviértete en un verdadero Maestro Pokémon!
          </p>
        </div>

      </div>
    </section>
  `;
}


