const mongoose = require('mongoose')

//definir el modelo para bootcamps
const BootcampSchema = mongoose.Schema({
    name:{ 
        type: String,
        unique: [true , "nombre de bootcamp debe ser unico"],
        required: [true , "nombre de bootcamp requerido "],
        maxlength: [50 , "longitud de nombre maximo 50 caracteres"]
    },
    phone :{
        type: Number,
        maxlength:[10 , "longitud de telefono maximo 10 digitos"]
    }, 
    address:{
        type: String,
        required:[ true , "direccion requerida"],
    },
    topics: {
        type: [String],
        enum: [
            "AI" ,
            "Frontend/UX",
            "Backend",
            "DevOps"
        ]
    },
    AverageRating: Number,
    createdAt: Date,

})

module.exports = mongoose.model('Bootcamps' ,  BootcampSchema)