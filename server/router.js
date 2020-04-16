const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('server is running!');
});

module.exports = router;
