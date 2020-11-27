let port = process.env.PORT || process.argv[2] || 5280;
const express = require('express');
const app = express();
app.use(express.static('./dist'));
app.get('/*',  (req, res) => {
  res.sendFile('index.html', {root: 'dist/'});
});
app.listen(port);
console.log('working on ' + port);
