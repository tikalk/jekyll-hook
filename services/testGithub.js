var test = require('tape'),
  fs = require('fs'),
  path = require('path');

test('Github api test', function (t) {
  var repo = require('./github');
  var file = path.join(process.cwd(), '.tmp', 'test-post.md');
  console.log(file);
  fs.writeFile(file, 'hello file '+Date.now(), function (err) {
    t.notOk(err, err);
    repo.getRepos(function (err, list) {
      t.notOk(err, err);
      console.log(list);
      t.end();
    });

  });
});
