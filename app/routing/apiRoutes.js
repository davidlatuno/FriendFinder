// Dependencies
var path = require("path");
var friends = require("./../data/friends");

var apiRoutes = {
    // Submit Survey
    post: function (app) {
        app.post("/api/submit", function (req, res) {
            // User input
            var newFriend = req.body
            // Hold all survey question arrays
            var matchArray = [];
            // Hold user difference values
            var compareArray = [];
            // Push arrays into match array
            for (var i = 0; i < friends.length; i++) {
                matchArray.push(friends[i].input)
            }
            // Compare function to add values to compareArray
            matchArray.forEach(compare);
            // Send match to client side
            res.json(friends[getIndex()]);
            // Add current input to friends array
            friends.push(newFriend);

            // Find Smallest number in compare array
            function getIndex() {
                var index = 0;
                var value = compareArray[0];
                for (var i = 1; i < compareArray.length; i++) {
                    if (compareArray[i] < value) {
                        value = compareArray[i];
                        index = i;
                    }
                }
                return index;
            }
            // Calculate compatibility values
            function compare(friend) {
                var compareArrayIndex = 0;
                for (var i = 0; i < newFriend.input.length; i++) {
                    var first = parseInt(newFriend.input[i])
                    var second = parseInt(friend[i])
                    if (first > second) {
                        compareArrayIndex += (first - second);
                    } else {
                        compareArrayIndex += (second - first);
                    }
                }
                compareArray.push(compareArrayIndex);
            }
        });
    },
    // URL route for friends array
    get: function (app) {
        app.get("/api/list", function (req, res) {
            return res.json(friends);
        })
    }
}
module.exports = apiRoutes;