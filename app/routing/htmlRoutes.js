var path = require("path");

function home(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}
module.exports = home;