const Client = require("../models/client");

exports.createClient = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const client = new Client({
        clientName: req.body.clientName,
        fullAddress: req.body.fullAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        web: req.body.web,
        fax: req.body.fax,
        clientLat: req.body.clientLat,
        clientLng: req.body.clientLng,
        imagePath: url + "/images/" + req.file.filename,
    });
    client
        .save()
        .then(createdClient => {
            res.status(201).json({
                message: "Client Add Successful",
                client: {
                    ...createdClient,
                    id: createdClient._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Create Client Record Failed"
            });
        });
};

exports.updateClient = (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
        const url = req.protocol + "://" + req.get("host");
        imagePath = url + "/images/" + req.file.filename;
    }
    const client = new Client({
        _id: req.body.id,
        clientName: req.body.clientName,
        fullAddress: req.body.fullAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        web: req.body.web,
        fax: req.body.fax,
        clientLat: req.body.clientLat,
        clientLng: req.body.clientLng,
        imagePath: imagePath,
    });
    console.log(client);
    Client.updateOne({ _id: req.params.id }, client).then(result => {
        res.status(200).json({ message: "Client record update successful!" });
    });
};

exports.getClients = (req, res, next) => {
    Client.find().then(documents => {
        res.status(200).json({
            message: "Client records retrieved successfully!",
            clients: documents
        });
    });
};

exports.getClient = (req, res, next) => {
    Client.findById(req.params.id)
        .then(client => {
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: "Client record not found" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Unable to retrieve Client record"
            });
        });
};

exports.deleteClient = (req, res, next) => {
    Client.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Client record deleted" });
    });
};
