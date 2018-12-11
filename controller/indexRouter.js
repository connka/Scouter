/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^express\.." }]*/
const express = require('express');
const router = express.Router();
const indexController = require('./indexController');
console.log(indexController);
// Get home page
router.get('/', indexController.render_homepage);
// Get svg for graph
router.get('/svg', indexController.render_graph);

module.exports = router;
