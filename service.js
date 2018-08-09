function Service(){
    let pokemon = []
    this.getPokemon = function(callback){
        $.get('https://pokeapi.co/api/v2/pokemon').then(res1 =>{
            pokemon = res1.results
            for(let i = 0; i < res.results.length; i++){
                //get detail for each pokemon returned in original query
                pokemon[i].myDetail = {}
                $.get(pokemon[i].url).then(res2 =>{
                    pokemon[i].myDetail = res2
                    if(i == res2.results.length-1){
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