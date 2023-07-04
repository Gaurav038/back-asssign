const express = require('express');
const bodyParser = require('body-parser');
const { taskA } = require('./controller/taskA');
const { taskD } = require('./controller/taskD');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Login endpoint
app.post('/login', taskA);
// getFruit endpoint
app.get('/getFruit', taskD );

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
