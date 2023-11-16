const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ReviewsModels = require("../models/ReviewsModels");

/////////// reviews /////////
//uris de de reviews
//traer todos los reviews
router.get("/", async (request, response) => {
  try {
    const reviews = await ReviewsModels.find();

    if (reviews.length === 0) {
      return response.status(404).json({
        sucess: false,
        msg: " Lo siento, no hay reviews disponibles",
      });
    }
    response.status(200).json({
      sucess: true,
      results: reviews,
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
    //TRAER PARAMTRO ID DE LA URI
    const reviewsId = request.params.id;

    if (!mongoose.Types.ObjectId.isValid(reviewsId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      });
    } else {
      const selected_reviews = await ReviewsModels.findById(reviewsId);
      if (!selected_reviews) {
        response.status(200).json({
          sucess: true,
          results: selected_reviews,
        });
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_reviews,
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
//crear todos los Reviews
router.post("/", async (request, response) => {
  try {
    const reviews = await ReviewsModels.create(request.body);

    response.status(201).json({
      sucess: true,
      data: reviews,
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
    const reviewsId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(reviewsId)) {
      response.status(500).json({
        sucess: false,
        msg: "Identificador invalido",
      })
    } else {
      const selected_reviews = await ReviewsModels.findByIdAndUpdate(
        reviewsId,
        request.body,
        {
          new: true,
        }
      )
      if (!selected_reviews) {
        response.status(404).json({
          sucess: false,
          msg: "No se hayo el reviews con id:" + reviewsId,
        })
      } else {
        response.status(200).json({
          sucess: true,
          results: selected_reviews,
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
//eliminar reviews por id
router.delete("/:id", async (request, response) => {
    reviewsId = request.params.id;
  const dltReviews = await ReviewsModels.findByIdAndDelete(
    reviewsId,
    request.body,
    {
      new: true,
    }
  );
  response.status(200).json({
    sucess: true,
    results: dltReviews,
  });
});

module.exports = router;
