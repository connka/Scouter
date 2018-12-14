/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^express\.." }]*/
const express = require('express');
const router = express.Router();
const indexController = require('./indexController');

// Get home page
// router.get('/', indexController.render_homepage);
// Get svg for graph
// router.get('/svg', indexController.render_graph);

// API calls
router.get('/api/hello', indexController.render_homepage);

router.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

module.exports = router;
