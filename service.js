function Service(){
    let pokemon = []
    this.getPokemon = function(callback){
        $.get('https://pokeapi.co/api/v2/pokemon').then(res1 =>{
            pokemon = res1.results
            for(let i = 0; i < pokemon.length; i++){
                //get detail for each pokemon returned in original query
                pokemon[i].myDetail = {}
                $.get(pokemon[i].url).then(res2 =>{
                    pokemon[i].myDetail = res2
                    if(i == pokemon.length-1){
                        console.log(pokemon)
                        callback()
                    }
                }).catch(err =>{
                    console.error(err)
                })
            }
        }).catch(err =>{
            console.error(err)
        })
    }
    this.accessPokemon = function(){
        return pokemon
    }
}