const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { orderItemValidation } = require('../../validations');
const orderItemController = require('../../controllers/orderItem.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(orderItemValidation.createOrderItem), orderItemController.createOrderItem)
  .get(auth(), orderItemController.getAllOrderItems);

router
  .route('/:orderItemId')
  .get(auth(), validate(orderItemValidation.getOrderItem), orderItemController.getOrderItem)
  .patch(auth(), validate(orderItemValidation.updateOrderItem), orderItemController.updateOrderItem)
  .delete(auth(), validate(orderItemValidation.deleteOrderItem), orderItemController.deleteOrderItem);

module.exports = router;
