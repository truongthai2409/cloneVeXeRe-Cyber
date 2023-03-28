const express = require("express");
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.routers");
const { tripRouters } = require("./trip.routers");
const { fingerPrintRouter } = require("./test-finger-print");
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouters);
rootRouter.use("/test-finger-print", fingerPrintRouter);
module.exports = {
  rootRouter,
};
