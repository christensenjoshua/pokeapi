function Service(){
    let pokemon = []
    this.getPokemon = function(callback){
        $.get('https://pokeapi.co/api/v2/pokemon').then(res =>{
            pokemon = res.results
            for(let i = 1; i < res.results.length; i++){
                //get detail for each pokemon returned in original query
                pokemon[i].detail = {}
                $.get(res.results[i].url).then(res =>{
                    pokemon[i].myDetail = res.results
                }).catch(err =>{
                    console.error(err)
                })
            }
            callback()
        }).catch(err =>{
            console.error(err)
        })
    }
    this.accessPokemon = function(){
        return pokemon
    }
}