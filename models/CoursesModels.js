const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
    title:{ 
        type: String,
        required: [true , "nombre de titulo de course requerido "],
        maxlength: [30 , "longitud de nombre de titulo maximo 30 caracteres"],
        minlength: [10 , "longitud de nombre de titulo minimo 10 caracteres"]
    },
    description :{
        type: String,
        required: [true , "descripcion de course requerido "],
        minlength: [10 , "longitud de nombre de descripcion minimo 10 caracteres"]
    }, 
    weeks:{
        type: Number,
        required:[ true , "semana requerida"],
        maxlength: [9 , "longitud de semanas es de maximo 9"]
    },

    enroll_cost:{
        type: Number,
        required:[ true , "costo de inscripcion requerido"]
    },
    minimun_skill: {
        type: String,
        enum: [
            "Beginner" ,
            "Intermediate",
            "Advanced",
            "Expert"
        ]
    },
    AverageRating: Number,
    createdAt: Date,

})

module.exports = mongoose.model('Courses' ,  CourseSchema)