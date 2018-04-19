var path = require("path");

var htmlRoutes = {
    home: function (app) {
        app.get("*", function (req, res) {
            res.sendFile(path.join(__dirname, "/../public/home.html"));
        });
    },
    survey: function(app) {
        app.get("/survey", function (req, res) {
            res.sendFile(path.join(__dirname, "/../public/survey.html"));
        });
    }
}
module.exports = htmlRoutes;