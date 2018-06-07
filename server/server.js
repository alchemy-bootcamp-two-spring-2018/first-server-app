// require the express module (installed via 'npm i express')
const express = require('express');

// mke and express app. no "new" keyword
const app = express();

//import cors 'middleware' to enable our server to do CORS 
const cors = require('cors');
// register it
app.use(cors());

// register express "middleware"   for converting incoming
//request body to deserialized request.body property
app.use(express.json());

// require our "mock" data
const walruses = require('./data/walruses');


//temp solution for updating data
const fs = require('fs');

//path to data file
const dataPath = 'data/walruses.json';

// app.<method>(<path>, handler)
app.get('/api/walruses', (req, res) => {
  // fs files paths are relative to pwd where Node was started
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  res.send(data);
}
);

app.post('/api/walruses', (req, res) => {
  console.log(req.method, req.url, req.body);
  // fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  // push our new object into array
  data.push(req.body);
  // save file
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  // send back object
  res.send(req.body);
});


app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found' });
});

//start "listening" (run) the app (server)
app.listen(3000, () => console.log('server is running...'));