const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const BootcampsModels = require("../models/BootcampsModels");

/////////// BOOTCAMPS /////////
//uris de de bootcamps
//traer todos los bootcamps
router.get("/", async (request, response) => {
  try {
    const bootcamps = await BootcampsModels.find();

    if (bootcamps.length === 0) {
      return response.status(404).json({
        sucess: false,
        msg: " Lo siento, no hay bootcamps disponibles",
      });
    }
    response.status(200).json({
      sucess: true,
      results: bootcamps,
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
router.get("/:id", async (request, response) => {
  try {
    //TRAER PARAMTRO ID DE LA URI
    const bootcampId = request.params.id;

    if (!mongoose.Types.ObjectId.isValid(bootcampId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      });
    } else {
      const selected_bootcamp = await BootcampsModels.findById(bootcampId);
      if (!selected_bootcamp) {
        response.status(200).json({
          sucess: true,
          results: selected_bootcamp,
        });
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_bootcamp,
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
//crear todos los bootcamps
router.post("/", async (request, response) => {
  try {
    const bootcamp = await BootcampsModels.create(request.body);

    response.status(201).json({
      sucess: true,
      data: bootcamp,
    });
  } catch (error) {
    response.status(500).json({
      succes: false,
      msg: error.message,
    });
  }
});

//////////////////////////////////////////
//actualizar bootcamp por id
router.put("/:id", async (request, response) => {
  try {
    const bootcampId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(bootcampId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      })
    } else {
      const selected_bootcamp = await BootcampsModels.findByIdAndUpdate(
        bootcampId,
        request.body,
        {
          new: true,
        }
      )
      if (!selected_bootcamp) {
        response.status(404).json({
          sucess: false,
          msg: "No se hayo el bootcamps con id:" + bootcampId,
        })
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_bootcamp,
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
//eliminar bootcamp por id
router.delete("/:id", async (request, response) => {
  bootcampId = request.params.id;
  const dltBootcamp = await BootcampsModels.findByIdAndDelete(
    bootcampId,
    request.body,
    {
      new: true,
    }
  );
  response.status(200).json({
    sucess: true,
    results: dltBootcamp,
  });
});

module.exports = router;
