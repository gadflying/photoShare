var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource
//   res.json({
// 	    	confirmation: 'success',
// 	    	message: resource
// 	    })
// res.send(res);
var controller = controllers[resource]
if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })

    return
}

controller.get(req.query, false)
.then(function(results){
    res.json({
      confirmation: 'success',
      results: results
    })
})
.catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
})

});

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
	    res.json({
	    	confirmation: 'fail',
	    	message: 'Invalid Resource'
	    })

	    return
	}
  // debugger;
  var idName = req.params.id;
  // console.log(id);
  // res.send(idName);
	controller.getById(idName, false)
	.then(function(result){
	    res.json({
	    	confirmation: 'success',
	    	result: result
	    })
	})
	.catch(function(err){
	    res.json({
	    	confirmation: 'fail',
	    	message: 'can not find  '+err
	    })
	})
})

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
	    res.json({
	    	confirmation: 'fail',
	    	message: 'Invalid Resource'
	    })

	    return
	}

	controller.post(req.body, false)
	.then(function(result){
	    res.json({
	    	confirmation: 'success',
	    	result: result
	    })
	})
	.catch(function(err){
	    res.json({
	    	confirmation: 'fail',
	    	message: err
	    })
	})
})



module.exports = router;
