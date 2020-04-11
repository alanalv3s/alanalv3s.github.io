const express = require ('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/56656415?s=460&u=fdaf70b72efe06a503eaa41592f6f6e5a2344c93&v=4",
        name: "Alan Alves",
        role: 'Analista de Suporte e Monitoramento NOC - <a href="https://www.estabil.is/" target="_blank">Estabilis</a>',
        description: "Estudante de programação web, focado em se tornar um programador full-stack",
        links: [
            { name: "GitHub", url: "https://github.com/alanalv3s"},
            { name: "Twitter", url: "https://twitter.com/AlanAlv3s"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/alan-alves-silva"},
            { name: "Email", url: "mailto: alanams97@gmail.com"},
            { name: "Telefone", url: "tel:+5511975036861"},
        ]
    }

    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id
    
    const video = videos.find(function(video) {
        return video.id == id
    })

        if (!video) {
            return res.send ("Video not found!")
        }

        return res.render("video", { item: video })
    })

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log("Server is running!")
})