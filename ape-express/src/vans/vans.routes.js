const express = require("express");
const router = express.Router();
const vansController = require('./vans.controller')

router
    .route("/")
        .get(vansController.all)
        .post(vansController.create);

router
    .route("/:id")
        .get(vansController.get)
        .delete(vansController.remove)
        .put(vansController.update);

module.exports = router; 