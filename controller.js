function Controller() {
    let service = new Service()

    function drawPokemon() {
        let template = ``
        let pokemon = service.accessPokemon()
        for (let i = 0; i < pokemon.length; i++) {
            const anPokemon = pokemon[i]
            console.log(anPokemon)
            let stats = `
            <h4>Stats</h4>
            `
            for (let ii = 0; ii < anPokemon.myDetail.stats.length; ii++) {
                stats += `
                <p>${anPokemon.myDetail.stats[ii].stat.name}: ${anPokemon.myDetail.stats[ii].base_stat}</p>
                `
            }
            template += `
            <div class="col-12 col-md-6 col-lg-4 text-center">
                <img src="${anPokemon.myDetail.sprites.front_default}" />
                <h3>${anPokemon.name}</h3>
                ${stats}
            </div>
            `
        }
        document.getElementById('content').innerHTML = template
    }


    this.getPokemon = function () {
        service.getPokemon(drawPokemon)
    }
}