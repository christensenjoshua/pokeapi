function Controller(){
    let service = new Service()
    
    function drawPokemon(){
        let template = ``
        let pokemon = service.accessPokemon()
        console.log(pokemon)
        debugger
        for(let i = 0; i < pokemon.length; i++){
            const anPokemon = pokemon[i]
            let stats = `
            <h4>Stats</h4>
            `
            for(let ii = 0; ii < anPokemon.myDetail.stats.length; i++){
                stats +=`
                <p>${anPokemon.myDetail.stats[ii].stat.name}: ${anPokemon.myDetail.stats[ii].base_stat}</p>
                `
            }
            template += `
            <div class="col-12 col-md-6 col-lg-4">
                <h3>${anPokemon.name}</h3>
                ${stats}
            </div>
            `
        }
        console.log(pokemon)
        document.getElementById('content').innerHTML = template
    }


    this.getPokemon = function(){
        service.getPokemon(drawPokemon)
    }
}