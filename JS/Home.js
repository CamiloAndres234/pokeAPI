function GeneralVista(){
    alert("Home - Lista de Pokémon"); // para probar
    var listapokes;
    const root = document.getElementById("root");
    root.innerHTML = "<h2>Lista de Pokémon</h2>"; // título

    for(let i = 0; i < pokemones.length; i++){
        let id = i + 1; // ID correcto (empieza en 1)
        let nombre = pokemones[i].name; // nombre del Pokémon

        listapokes += `
            <div class="un-pokemon" onclick="Detalle(${id})">
                <p>#${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
                     width="80" height="80" loading="lazy" alt="${nombre}">
            </div>
        `;
    }
    return listapokes
}

/** Cambios de clase 290925*/
function buscadorfuncion(asa){
    if(asa.length >= 3 ){
        for (let i = 0; i < pokemones.length; i++) {
            const nombre = pokemones[i].name.toLowerCase();
            if (nombre.includes(asa.toLowerCase())) {
                filtrados.push(pokemones[i]);
            }
        }
        let listaHTML = generarLista(filtrados)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }else{
        let listaHTML = generarLista(pokemones)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
        
}

function FiltroConexion(Filtroelegido){
    alert(Filtroelegido)
}

function Home(){

    //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

    //filtro
     const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];

    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("tipos-container"); 

    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        filtro.appendChild(btn);
    }

    const filtro= document.createElement("div");
    
    //listas
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-lista");

    contenedorLista.innerHTML= generarLista(pokemones);

    //agregar
    document.getElementById("root").appendChild(buscador)
    document.getElementById("root").appendChild(filtro)
    document.getElementById("root").appendChild(contenedorLista)

    console.log(GeneralVista(pokemones))


}
