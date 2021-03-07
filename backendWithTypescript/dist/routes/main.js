"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller/controller"));
const router = express_1.Router();
router.get('/', controller_1.default.getAllUsers);
router.get('/user/:id', controller_1.default.getDetail);
exports.default = router;
