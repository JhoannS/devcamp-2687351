const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const UsersModels = require("../models/UsersModels");

/////////// users /////////
//uris de de users
//traer todos los users
router.get("/", async (request, response) => {
  try {
    const users = await UsersModels.find();

    if (users.length === 0) {
      return response.status(404).json({
        sucess: false,
        msg: " Lo siento, no hay users disponibles",
      });
    }
    response.status(200).json({
      sucess: true,
      results: users,
    });
  } catch (error) {
    response.status(500).json({
      succes: false,
      msg: "Error interno del servidor",
    });
  }
});

//////////////////////////////////
//traer todos los bootcamp con id/5
router.get("/:id",
 async (request, response) => {
  try {
    //TRAER PARAMETRO ID DE LA URI
    const usersId = request.params.id;

    if (!mongoose.Types.ObjectId.isValid(usersId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      });
    } else {
      const selected_users = await UsersModels.findById(usersId);
      if (!selected_users) {
        response.status(200).json({
          sucess: true,
          results: selected_users,
        });
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_users,
        });
      }
    }
  } catch (error) {
    response.status(500).json({
      succes: false,
      msg: error.message,
    });
  }
});

//////////////////////////////
//crear todos los users
router.post("/register",
 async (request, response) => {
  try {
       const users = 
           await UsersModels.create(request.body);

    response.status(201).
    json({
      sucess: true,
      data: users,
    });
  } catch (error) {
    response.status(400)
            .json({
      succes: false,
      msg: error.message,
    });
  }
});

//////////////////////////////////////////
//actualizar bootcamp por id
router.put("/:id", async (request, response) => {
  try {
    const usersId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(usersId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      })
    } else {
      const selected_users = await UsersModels.findByIdAndUpdate(
        usersId,
        request.body,
        {
          new: true,
        }
      )
      if (!selected_users) {
        response.status(404).json({
          sucess: false,
          msg: "No se hayo el users con id:" + usersId,
        })
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_users,
        })
      }
    }
  } catch (error) {
    response.status(500).json({
      succes: false,
      msg: error.message
    })
  }
})

////////////////////////////////
//eliminar users por id
router.delete("/:id", async (request, response) => {
  usersId = request.params.id;
  const dltUsers = await UsersModels.findByIdAndDelete(
    usersId,
    request.body,
    {
      new: true,
    }
  );
  response.status(200).json({
    sucess: true,
    results: dltUsers,
  });
});

module.exports = router;
