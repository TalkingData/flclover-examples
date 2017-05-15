const Flclover = require('flclover');

const app = Flclover({
  baseDir: __dirname,
});
app.proxy = true;

if (!module.parent) app.listen(3000);
module.exports = app;
