var express = require('express');
var router = express.Router();

// 引入控制器
var positionController = require('../controllers/position');

// 请求路由
router.post('/create',positionController.createPosition);

router.get('/:account',positionController.queryPosition);

router.put('/:id/update',positionController.updatePosition);

router.delete('/:id',positionController.deletePosition);

module.exports = router
