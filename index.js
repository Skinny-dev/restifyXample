'use strict'
const Hapi = require('@hapi/hapi');
const init = async()=>{
    const server = Hapi.server(
        {
            port:3000,
            host: 'localhost'
        }
    )
};


/* My serve from restify crud 
const restify = require('restify');
const  server = restify.createServer();

//settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

const users={
    1:{
        name:  'zapato',
        precio: 100
    },
    2:{
        name: 'camisa',
        precio: 80
    }
};
let usersCount = 2;

server.get('/item', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(users))
})
server.get('/item/:id',(req, res) => {
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users[parseInt(req.params.id)]))
});

server.put('/item/:id',(req, res) =>{
    const user =users[parseInt(req.params.id)]
    const act = req.body
    for(let campo in act){
        user[campo] = act[campo]
    }
    res.setHeader('Content-Type','application/json')
    res.writeHead(200)
    res.end(JSON.stringify(user))

})
server.post('/item', (req, res) => {
    let user = req.body
    usersCount++
    user.id = usersCount
    users[user.id] = user
    res.writeHead(200)
    res.end(JSON.stringify(user))
})

server.del('/item/:id', (req, res) => {
    delete users[parseInt(req.params.id)];
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(true));
});
//elimar todo los campos del usuario
server.del('/item', (req, res) => {
    for(let field in users) {
        delete users[field]
    }
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(true));
});



server.listen(4000,()=>{
    console.log('%s escuchando servidor en %s', server.name, server.url)
});*/