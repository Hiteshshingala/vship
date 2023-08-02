const purchaseOrder = require('../datas/purchaseOrder');
let purchaseOrders = JSON.parse(JSON.stringify(purchaseOrder));

module.exports = {
   getPO: function (req, res) {
        res.status(200).send({
            purchaseOrders
        });
   },
   addPO: function (req, res) {
        const {item_name, description, quantity, unit_price, total_price} = req.body;
        if(!item_name || !description || !quantity || !unit_price || !total_price) {
            res.status(400).send('Invalid purchase order');
        }
        purchaseOrders.push({
            item_name, description, quantity, unit_price, total_price
        });
        res.status(200).send({
            purchaseOrders
        });
   },


}