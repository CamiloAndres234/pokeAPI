async function Pokemon(parametro) {
  try {
    // Llamada a la API con el nombre o ID del Pokémon
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    if (!res.ok) {
      throw new Error("Pokémon no encontrado");
    }
    const data = await res.json();

    // Sacar tipos del Pokémon
    let tipoPoke = data.types.map(t => t.type.name).join(", ");

    console.log(data);

    // Pintar en pantalla
    document.getElementById("root").innerHTML = `
      <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
             alt="${data.name}" height="120" width="auto">
        <p><b>${data.name.toUpperCase()}</b> (#${data.id})</p>
        <p><b>Tipo:</b> ${tipoPoke}</p>
        <p><b>Altura:</b> ${data.height / 10} m</p>
        <p><b>Peso:</b> ${data.weight / 10} kg</p>
        <p><b>HP:</b> ${data.stats[0].base_stat}</p>
        <p><b>Velocidad:</b> ${data.stats[5].base_stat}</p>
        <p><b>Ataque:</b> ${data.stats[1].base_stat} | <b>Defensa:</b> ${data.stats[2].base_stat}</p>
        <p><b>Ataque Especial:</b> ${data.stats[3].base_stat} | <b>Defensa Especial:</b> ${data.stats[4].base_stat}</p>
      </section>
    `;
  } catch (error) {
    document.getElementById("root").innerHTML = `
      <section class="c-detalle">
        <p style="color:red;"><b>Error:</b> ${error.message}</p>
      </section>
    `;
  }
}
