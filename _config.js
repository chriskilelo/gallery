var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production:'mongodb+srv://chriskilelo:y2dSyKj2jwHdErqU@gallery-cluster.abl7b.mongodb.net/darkroom?retryWrites=true&w=majority',
    development:'mongodb+srv://chriskilelo:y2dSyKj2jwHdErqU@gallery-cluster.abl7b.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test:'mongodb+srv://chriskilelo:y2dSyKj2jwHdErqU@gallery-cluster.abl7b.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
