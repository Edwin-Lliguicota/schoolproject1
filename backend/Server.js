// Dependencies & Package Import
const express = require('express');
const Path = require('path');
const WebsiteRoutes = require('./routes/routes.js')
const App = express()
const PORT = 3000;

// View Engine SET
App.set('view engine', 'ejs');
App.set('views', Path.join(__dirname, "../"))

// Website Routes INSERT
App.use(WebsiteRoutes)

App.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`))