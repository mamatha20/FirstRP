const expController = require("../controller/expense.controller");
//const middleware = require("../services/jwtinterceptor.service");
var express = require("express");

var router = express.Router();

router.post("/add", expController.addExpense);
router.get("/get", expController.getExpenseById);
module.exports = router;