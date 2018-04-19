var path = require("path");

var friends = []

var apiRoutes = {
    post: function (app) {
        app.post("/api/submit", function (req, res) {
            var newFriend = req.body
            friends.push(newFriend);
            res.json(newFriend);
            console.log(friends);
        });
    },
    get: function(app) {
        app.get("/api/list", function(req, res) {
            return res.json(friends);
        })
    }
}
module.exports = apiRoutes;