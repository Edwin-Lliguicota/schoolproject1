const express = require('express');
const Router = express.Router()
var object = {
  hello:"hello"
}
Router.get('/', (req, res) => {
  res.send("Testing!")

})
Router.get('/test',(req,res)=> {
  res.send(object)
})
module.exports = Router;
