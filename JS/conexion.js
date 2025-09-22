let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function conexionLista() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
  const data = await res.json();
  return data.results;
}

// Definir Home para que no marque error
function Home(lista) {
  console.log("Pokémon cargados:", lista.length);
  console.log(lista); // muestra todo el array
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexionLista();
  }
  Home(pokemones)
}

General();
