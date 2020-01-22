const mongoose = require ('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avata_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);