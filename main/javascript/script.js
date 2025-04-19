
function search() {
    document.getElementById("pokeInfo").style.display = "";

    const input = document.getElementById("searchInput").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").innerHTML = data.name
        document.getElementById("pokeImg").src = data.sprites.other["official-artwork"].front_default
        document.getElementById("id").innerHTML = "#" + data.id
        document.getElementById("height").innerHTML = data.height / 10 + " m"
        document.getElementById("weight").innerHTML = data.weight / 10 + " kg"
        document.getElementById("type1").innerHTML = data.types[0].type.name
        document.getElementById("type2").innerHTML = data.types[1].type.name
        document.getElementById("ability1").innerHTML = data.abilities[0].ability.name
        document.getElementById("ability2").innerHTML = data.abilities[1].ability.name
        if (data.abilities[2] === undefined) {
            document.getElementById("ability3").innerHTML = ""
        }
        else {
            document.getElementById("ability3").innerHTML = data.abilities[3].ability.name
        }
        


        //estatisticas
        document.getElementById("hp").innerHTML = "Hp: " + data.stats[0].base_stat
        document.getElementById("atk").innerHTML = "Atk: " + data.stats[1].base_stat
        document.getElementById("def").innerHTML = "Def: " + data.stats[2].base_stat
        document.getElementById("special").innerHTML = "Sp. Atk: " + data.stats[3].base_stat
        document.getElementById("speed").innerHTML = "Speed: " + data.stats[5].base_stat

        console.log(data)


    })

}