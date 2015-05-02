return function(context, cb) {
  require('child_process').exec('python -c "' + context.data.script + '"', function(err, out) {
    cb(err, out);
  });
};
