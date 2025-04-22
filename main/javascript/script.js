// Cor baseada no tipo do pokemon
const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

function search() {

    //Pegar o input
    const input = document.getElementById("searchInput").value;

    //Validação da busca
    if (input === "") {
        document.getElementById("alert").textContent = "Não encontrado ou inválido!";
        document.getElementById("erro").style.display = "block";
        return
    }
    else {
        document.getElementById("homeIcon").style.display = "flex";
        document.getElementById("pokefont").style.display = "none";
        document.getElementById("pokeInfo").style.display = "flex"; 

        //Pegar informações
        fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").innerHTML = data.name
            document.getElementById("pokeImg").src = data.sprites.other["official-artwork"].front_default
            document.getElementById("id").innerHTML = "#" + data.id
            document.getElementById("height").innerHTML = data.height / 10 + " m"
            document.getElementById("weight").innerHTML = data.weight / 10 + " kg"

            //Tipos
            document.getElementById("type1").innerHTML = data.types[0].type.name
            if (data.types[1] === undefined) {
                document.getElementById("type2").innerHTML = ""
            }
            else {
                document.getElementById("type2").innerHTML = data.types[1].type.name
            }

            //Habilidades
            document.getElementById("ability1").innerHTML = data.abilities[0].ability.name

            if (data.abilities[1] === undefined) {
                document.getElementById("ability2").innerHTML = ""
            }
            else {
                document.getElementById("ability2").innerHTML = data.abilities[1].ability.name
            }

            if (data.abilities[2] === undefined) {
                document.getElementById("ability3").innerHTML = ""
            }
            else {
                document.getElementById("ability3").innerHTML = data.abilities[3].ability.name
            }
            
            //estatisticas --- CORRIGIR
            document.getElementById("hp").innerHTML = "Hp: " + data.stats[0].base_stat
            document.getElementById("atk").innerHTML = "Atk: " + data.stats[1].base_stat
            document.getElementById("def").innerHTML = "Def: " + data.stats[2].base_stat
            document.getElementById("special").innerHTML = "Sp. Atk: " + data.stats[3].base_stat
            document.getElementById("speed").innerHTML = "Speed: " + data.stats[5].base_stat

            //Cor do pokemon
            const mainType = data.types[0].type.name;
            const mainColor = typeColors[mainType] || "#ffffff";
            const infos = document.querySelectorAll(".info");
            infos.forEach(div => {
                div.style.backgroundColor = mainColor;
            });

            console.log(data)
        })
        //Caso de erro
        .catch(error => {
            console.error(error)
            document.getElementById("alert").textContent = "Erro ao buscar o Pokémon. Verifique o nome digitado!";
            document.getElementById("pokeInfo").style.display = "none";
            document.getElementById("pokefont").style.display = "flex";
            document.getElementById("erro").style.display = "block";
        })

        //Limpa o input
        document.getElementById("searchInput").value = "";


        //Botão Home
        document.getElementById("homeIcon").addEventListener("click", () => {
            document.getElementById("homeIcon").style.display = "hide";
            document.getElementById("pokeInfo").style.display = "none";
            document.getElementById("pokefont").style.display = "flex";
            document.getElementById("erro").style.display = "flex";
        })

    }


}