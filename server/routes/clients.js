const express = require("express");

const ClientController = require("../controllers/clientController");

const localStorageUpload = require("../middleware/upload-localStorage");

const router = express.Router();

router.post("", localStorageUpload, ClientController.createClient);

router.put("/:id", localStorageUpload, ClientController.updateClient);

router.get("", ClientController.getClients);

router.get("/:id", ClientController.getClient);

router.delete("/:id", ClientController.deleteClient);


module.exports = router;
