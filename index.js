const express = require('express');
const app = express();
const router = express.Router();

const host = 'localhost';
const port = 8080;

app.listen(port, () => console.log(`Now listening on port: ${port}`));
