// import * as controller from "../controller";
const controller = require("../controllers");
const express = require("express");
// import express from "express";
const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
module.exports = router;
