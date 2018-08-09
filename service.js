function Service(){
    let pokemon = []
    //think about local storage for this object and cache it.
    this.getPokemon = function(callback){
        document.getElementById('content').innerHTML = '<h2>Loading...</h2><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">'
        $.get('https://pokeapi.co/api/v2/pokemon').then(res1 =>{
            pokemon = res1.results
            for(let i = 0; i < pokemon.length; i++){
                //get detail for each pokemon returned in original query
                pokemon[i].myDetail = {
                    stats:[],
                    sprites:[]
                }
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