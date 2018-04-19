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
    }
}
module.exports = apiRoutes;