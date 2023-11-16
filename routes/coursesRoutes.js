const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CoursesModels = require("../models/CoursesModels");

/////////// BOOTCAMPS /////////
//uris de de bootcamcoursesps
//traer todos los bootcamps
router.get("/", async (request, response) => {
  try {
    const courses = await CoursesModels.find();

    if (courses.length === 0) {
      return response.status(404).json({
        sucess: false,
        msg: " Lo siento, no hay courses disponibles",
      });
    }
    response.status(200).json({
      sucess: true,
      results: courses,
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
    const coursesId = request.params.id;

    if (!mongoose.Types.ObjectId.isValid(coursesId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      });
    } else {
      const selected_courses = await CoursesModels.findById(coursesId);
      if (!selected_courses) {
        response.status(200).json({
          sucess: true,
          results: selected_courses,
        });
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_courses,
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
//crear todos los courses
router.post("/", async (request, response) => {
  try {
    const courses = await CoursesModels.create(request.body);

    response.status(201).json({
      sucess: true,
      data: courses,
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
    const coursesId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(coursesId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      })
    } else {
      const selected_courses = await CoursesModels.findByIdAndUpdate(
        coursesId,
        request.body,
        {
          new: true,
        }
      )
      if (!selected_courses) {
        response.status(404).json({
          sucess: false,
          msg: "No se encontro el courses con id:" + coursesId,
        })
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_courses,
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
//eliminar courses por id
router.delete("/:id", async (request, response) => {
    coursesId = request.params.id;
  const dltCourses = await CoursesModels.findByIdAndDelete(
    coursesId,
    request.body,
    {
      new: true,
    }
  );
  response.status(200).json({
    sucess: true,
    results: dltCourses,
  });
});

module.exports = router;
