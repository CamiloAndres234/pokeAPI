let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function conexionLista(UnFiltro) {
  if (UnFiltro == "ALL") {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();
    return data.results;
  } else {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
    const data = await res.json();
  
    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
  }
}

// Definir Home para que no marque error
function Home(lista) {
  console.log("Pokémon cargados:", lista.length);
  console.log(lista); // muestra todo el array
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexionLista("ALL"); 
  }
  Home(pokemones);
}

General();

async function FiltroConexion(Filtroelegido) {
  let pokesFiltrados = await conexionLista(Filtroelegido); 
  document.getElementById("la-lista").innerHTML = " ";
  let listaFiltro = generarLista(pokesFiltrados);  // 🔥 corregido (antes estaba GeneralLista)
  document.getElementById("la-lista").innerHTML = listaFiltro;
}
