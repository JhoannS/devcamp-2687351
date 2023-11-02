//Dependencia commonjs
const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')

// dependencias de rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')

// dependencia de conexion a bd
const conectDB = require('./config/db')

// establecer archivo .env del proyecto
dotenv.config({
    path:"./config/.env"
})

conectDB()

//crear el objeto app
const app = express();

// express para recibir datos JSON
app.use(express.json())

// vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps', bootcampRoutes)

//primera prueba de url del servidor
app.get('/prueba' , 
        function(request, response){
            response.send("Holaaaaaaa")
})



////// CURSES //////////
//evidencia: uris de curses

//traer todos los curses
app.get('/api/v1/devcamp/curses',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los curses"
            })
    })

    //traer todos los curses por id
app.get('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando curses con id ${request.params.id}`
        })
})

//crear todos los curses
app.post('/api/v1/devcamp/curses',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear curses"
            })
    })

//actualizar curses por id
app.put('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando curses con id ${request.params.id}`
        })
})

//eliminar curses por id
app.delete('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando curses con id ${request.params.id}`
        })
})



////// REVIEWS //////////
//evidencia: uris de reviews

//traer todos los reviews
app.get('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los reviews"
            })
    })

    //traer todos los reviews por id
app.get('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando reviews con id ${request.params.id}`
        })
})

//crear todos los reviews
app.post('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear reviews"
            })
    })


//actualizar reviews por id
app.put('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando reviews con id ${request.params.id}`
        })
})

//eliminar curses por id
app.delete('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando reviews con id ${request.params.id}`
        })
})


////// USERS //////////
//evidencia: uris para users

//traer todos los users
app.get('/api/v1/devcamp/users',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los users"
            })
    })

    //traer todos los users por id
app.get('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando users con id ${request.params.id}`
        })
})

//crear todos los users
app.post('/api/v1/devcamp/users',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear users"
            })
    })


//actualizar users por id
app.put('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando users con id ${request.params.id}`
        })
})

//eliminar users por id
app.delete('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando users con id ${request.params.id}`
        })
})


//establecer servidor
const PUERTO = process.env.EXPRESS_PORT;

app.listen( PUERTO,
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`.bgBlue.white))  