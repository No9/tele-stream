var Telestream = require('../');
var test = require('tap').test

test('Sucessful init', function (t) {
   t.plan(2);
   var ts = new Telestream().on('open', function(hash) {
      t.ok(true, 'open ok');
      var stm = ts.Stream('hello');
      t.ok(stm, 'stream created');
   });
});
