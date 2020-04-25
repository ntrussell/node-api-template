const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectName: { type: String },
    projectStatus: { type: Boolean },
    fullAddress: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    clientName: { type: String },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    projectLat: { type: String },
    projectLng: { type: String },
    difficultyLevel: { type: Number },
    imagePath: { type: String }
});
projectSchema.set('timestamps', true);

module.exports = mongoose.model('Project', projectSchema);
