function Home(){
    alert("Home - Lista de Pokémon"); // para probar

    const root = document.getElementById("root");
    root.innerHTML = "<h2>Lista de Pokémon</h2>"; // título

    for(let i = 0; i < pokemones.length; i++){
        let id = i + 1; // ID correcto (empieza en 1)
        let nombre = pokemones[i].name; // nombre del Pokémon

        root.innerHTML += `
            <div class="un-pokemon" onclick="Detalle(${id})">
                <p>#${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
                     width="80" height="80" loading="lazy" alt="${nombre}">
            </div>
        `;
    }
}
