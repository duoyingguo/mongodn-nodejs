// 引入module中模型映射
var Position = require('../models/position');

// Create
exports.createPosition = function (req,res) {
    var position = new Position({
        account: req.body.account,
        quantity: req.body.quantity,
        stock: req.body.stock,
        price: req.body.price
    });

    position.save(function (err) {
        if(err){
            return next(err)
        }
        res.send('仓位记录添加成功')
    })
};

// Read
exports.queryPosition = function (req,res) {
    const ac = req.params.account;
    Position.find({account: ac},function (err,ps) {
        if(err){
            return next(err);
        }
        res.send(ps);
    });

};

// Update
exports.updatePosition = function (req,res) {
  Position.findByIdAndUpdate(req.params.id,
      {
          $set: req.body
      },function (err) {
          if(err){
              return next(err);
          }
          res.send('仓位记录更新成功');
      })
};
// Delete
exports.deletePosition = function (req,res) {
    Position.findByIdAndRemove(req.params.id,function (err) {
        if(err){
            return next(err);
        }
        res.send('仓位记录删除成功');
    })
}