const mongoose = require('mongoose')

const ReviewsSchema = mongoose.Schema({
    title:{ 
        type: String,
        required: [true , "titulo de revies requerido "],
        maxlength: [20 , "longitud de titulo de review es de maximo 20 caracteres"]
    },
    text :{
        type: String,
        required: [true , "texto de opiniones es requerido "],
        maxlength: [50 , "longitud de opiniones de maximo 50 caracteres"]
    }, 
    rating:{
        type: Number,
        required:[ true , "rating requerida"],
        max: [9 , "longitud de clasificacion maxima es de 10"],
        min: [1 , "longitud de clasificacion minima es de 1"]
    },

    AverageRating: Number,
    createdAt: Date,

})

module.exports = mongoose.model('Reviews', ReviewsSchema)