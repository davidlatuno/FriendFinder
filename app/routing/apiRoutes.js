var path = require("path");
var friends = require("./../data/friends");

var apiRoutes = {
    post: function (app) {
        app.post("/api/submit", function (req, res) {
            var newFriend = req.body
            var matchArray = [];
            var compareArray = [];
            for (var i = 0; i < friends.length; i++) {
                matchArray.push(friends[i].input)
            }
            matchArray.forEach(compare);


            console.log(compareArray);
            res.json(friends[getIndex()]);
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
    get: function (app) {
        app.get("/api/list", function (req, res) {
            return res.json(friends);
        })
    }
}
module.exports = apiRoutes;