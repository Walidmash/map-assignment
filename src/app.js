const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const compression = require('compression');
app.use(compression());
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use((req, res) => {// to let react handle all routes
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.set('port', process.env.PORT || 4000);

module.exports= {
  server
};
