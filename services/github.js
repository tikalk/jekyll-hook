
/**
* Handle Gihub API calls
*/
var GitHubApi = require("github"),
async = require('async');


module.exports = (function () {

  var github = new GitHubApi({
      // required
      version: "3.0.0",
      // optional
      debug: true,
      protocol: "https",
      host: "api.github.com",
      pathPrefix: "/api/v3", // for some GHEs
      timeout: 5000
  });

  github.authenticate({
      type: "basic",
      username: 'assafg',
      password: '1qaz2wsx'
  });
  return{
    savePost: function (fileName, callback) {

      async.series([
        function (next) {
          next();
        }
      ],
      function (err) {
        callback(err);
      });

    },
    getRepos: function (callback) {
      github.repos.getAll({user: 'assafg'}, {method:'get'}, callback);
    }
  }
})();
