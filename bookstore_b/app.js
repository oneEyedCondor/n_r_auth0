const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
 
app.use(bodyParser.json());

app.use(cors());

require('./config/sequelize');
require('./src/models');

require('./src/routes/content.routes.js')(app);

app.listen(8085, function () {
  console.log('Server has been started on port 8085...');
});