"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MOCK_DATA_json_1 = __importDefault(require("./MOCK_DATA.json"));
let collectionOfUsers = new Array();
MOCK_DATA_json_1.default.filter((user) => {
    collectionOfUsers.push({ id: user.id, email: user.email });
});
const app = express_1.default();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.get('/', (req, res, next) => {
    res.send(collectionOfUsers);
});
app.get('/user/:id', (req, res, next) => {
    let userId = req.params.id;
    MOCK_DATA_json_1.default.find((user) => {
        if (user.id == userId) {
            res.send(user);
        }
    });
});
app.listen(5000, () => {
    console.log("Server is running");
});
