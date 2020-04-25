const express = require("express");

const ProjectController = require("../controllers/projectController");

const upload = require("../middleware/upload-s3");

const router = express.Router();

router.post("", upload.array('image', 1), ProjectController.createProject);

router.put("/:id", upload.array('image', 1), ProjectController.updateProject);

router.get("", ProjectController.getProjects);

router.get("/:id", ProjectController.getProject);

router.delete("/:id", ProjectController.deleteProject);


module.exports = router;
