const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    clientName: { type: String},
    fullAddress: { type: String},
    streetAddress: { type: String},
    city: { type: String},
    state: { type: String},
    zip: { type: String},
    phone: { type: String},
    web: { type: String},
    fax: { type: String},
    clientLat: { type: String},
    clientLng: { type: String},
    imagePath: { type: String },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
});
clientSchema.set('timestamps', true);
module.exports = mongoose.model('Client', clientSchema);
