"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MOCK_DATA_json_1 = __importDefault(require("../model/MOCK_DATA.json"));
let someInfoOfUser = new Array();
//get specific fields of data
MOCK_DATA_json_1.default.filter((user) => {
    someInfoOfUser.push({ id: user.id, email: user.email });
});
let controller = {
    getAllUsers: (req, res) => {
        try {
            res.json(someInfoOfUser);
        }
        catch (error) {
            res.json("Something went wrong");
        }
    },
    getDetail: (req, res) => {
        let userId = req.params.id;
        try {
            MOCK_DATA_json_1.default.find((user) => {
                if (user.id == userId) {
                    res.json(user);
                }
            });
        }
        catch (error) {
            res.json("Something went wrong");
        }
    }
};
exports.default = controller;
