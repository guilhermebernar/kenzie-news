import {News, main} from "./models/news.js"
import {App}        from "./controllers/requisicoes.controller.js"

main()

News.featured(await App.requisicao())
News.listCard(await App.requisicao())
