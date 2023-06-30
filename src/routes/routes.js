const express = require("express");
const router = express.Router();
const {clientsController, projectController} = require("../controller");



// ---------------------------------------------
//  Clients Table Routes
// ---------------------------------------------

router.get("/clients", clientsController.getClients);
router.post("/clients", clientsController.insertClients);
router.get("/clients/:id", clientsController.getOneClient);
router.delete("/clients/:id", clientsController.deleteClients);
router.put("/clients/:id", clientsController.updateClients);



// ---------------------------------------------
//  Project Table Routes
// ---------------------------------------------

router.post("/project", projectController.insertProjectController);

module.exports = router;