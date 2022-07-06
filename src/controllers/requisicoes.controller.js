export{App}

class App {

    static async requisicao(){
    
        const response = await fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response  =>  response.json())
        .then(response => response)
        .catch((err)    =>  {err.message})
        
        console.log(response)
        return response
    }
}
