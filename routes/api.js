var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource


  res.json({
	    	confirmation: 'success',
	    	message: resource
	    })
res.send(res);

});

module.exports = router;
