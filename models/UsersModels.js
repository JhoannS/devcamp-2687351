const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')



    
const UserSchema = mongoose.Schema({
name:{
    type : String,
    required: [true , "nombre de user es requerido"]
},
email:{
    type : String,
    required: [true , "correo del user es requerido"],
    match:[ 
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        ,
        "email no valido"
    ]
},
role:{
    type : String,
    required: [true , "rol de user es requerido"],
    enum:[
        "user",
        "publisher"
    ]
},
password:{
    type : String,
    required: [true , "contraseña de user es requerido"],
    max: [6, "contraseña de user maximo de 6 caracteres"],
    select: false
},
createdAt:{
    type: Date,
    default: Date.now
}
})
//crear la accion pre
UserSchema.pre("save",async function(next){
    //crear la sal
    const sal = await bcryptjs.genSalt(10)
    //encriptar contraseña
    this.password = await bcryptjs.
                    hash(this.password,sal)
    
    }
    )

module.exports = mongoose.model('Users', UserSchema)