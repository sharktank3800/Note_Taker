const express = require("express");

// importing api routes file and html routes
const api_route = require("./routes/api_routes.js");
const html_route = require("./routes/html_routes.js");

const app = express();

// setting the port dynamically 
const PORT = process.env.PORT || 3333;

// JSON parsing middleware
app.use(express.json());
app.use(express.static("public"))

// mounting our api routes under the /api path
app.use( api_route);
app.use( html_route);

app.listen(PORT, () => 
    console.log(`server started on  http://localhost:${PORT}`)
);