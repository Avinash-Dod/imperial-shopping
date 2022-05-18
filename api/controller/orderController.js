const Orders = require("../model/orderSchema");
const mongoose = require("mongoose");

const addOrder = (req, res) => {
    const Order = new Orders({
        _id: new mongoose.Types.ObjectId(),
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        postCode: req.body.postCode,
        address: req.body.address,
        city:req.body.city,
        orderNote: req.body.orderNote,
        productDetail: req.body.productDetail,
        total: req.body.total,
        status: req.body.status

    });
    Order
        .save()
        .then((result) => {
            res.status(200).json({
                responceData: result,
                msg: "success",
                error: true,
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                msg: "failed to save order"
            });
        });
};
const getOrder = (_req, res) => {
    Orders.find({}).then(function (order) {
        res.send(order);
    });
};
const updateOrder = (req, res) => {
    const id = req.params.id
    Orders.findByIdAndUpdate({ _id: id }, {
        $set: {
            status: req.body.status
        }
        //  ?  await bcrypt.hash(req.body.pin, 10) : false,? await bcrypt.hash(req.body.pin, 10) : false,
    })
        .then((result) => {

            if (result) {
                return res.send({
                    message: "User was Updated successfully!",
                    success: true,
                    data: {},
                }
                );
            } else {
                return res.send({
                    message: `Cannot Update User `,
                    success: false,
                    data: {},
                });
            }

        }
        )
        .catch((err) => {
            return res.status(500).send({
                message: "Could not Update User with id=" + id,
                success: false,
                data: {},
            });
        });
}
const deleteOrder = (req, res) => {
    const id = req.params.id

    Orders.deleteOne({ _id: id })
        .then((num) => {
            if (num) {
                return res.send({
                    message: "Order was deleted successfully!",
                    success: true,
                    data: {},
                }
                );
            } else {
                return res.send({
                    message: `Cannot delete Order `,
                    success: false,
                    data: {},
                });
            }

        }
        )
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete Order with id=" + id,
                success: false,
                data: {},
            });
        });
};


module.exports = {
    addOrder,
    getOrder,
    deleteOrder,
    updateOrder
};
