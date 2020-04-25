const Project = require("../models/project");

exports.createProject = (req, res, next) => {
    const project = new Project({
        projectName: req.body.projectName,
        fullAddress: req.body.fullAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        clientName: req.body.clientName,
        clientId: req.body.clientId,
        difficultyLevel: req.body.difficultyLevel,
        projectLat: req.body.projectLat,
        projectLng: req.body.projectLng,
        imagePath: req.file,
    });
    project
        .save()
        .then(createdProject => {
            res.status(201).json({
                message: "Project Add Successful",
                project: {
                    ...createdProject,
                    id: createdProject._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Create Project Record Failed"
            });
        });
};

exports.updateProject = (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
        imagePath = req.file;
    }
    const project = new Project({
        _id: req.body.id,
        projectName: req.body.projectName,
        fullAddress: req.body.fullAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        clientName: req.body.clientName,
        clientId: req.body.clientId,
        difficultyLevel: req.body.difficultyLevel,
        projectLat: req.body.projectLat,
        projectLng: req.body.projectLng,
        imagePath: imagePath,
    });
    console.log(project);
    Project.updateOne({ _id: req.params.id }, project).then(result => {
        res.status(200).json({ message: "Project record update successful!" });
    });
};

exports.getProjects = (req, res, next) => {
    Project.find().then(documents => {
        res.status(200).json({
            message: "Project records retrieved successfully!",
            projects: documents
        });
    });
};

exports.getProject = (req, res, next) => {
    Project.findById(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: "Project record not found" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Unable to retrieve Project record"
            });
        });
};

exports.deleteProject = (req, res, next) => {
    Project.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Project record deleted" });
    });
};
