"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use('/', user_routes_1["default"]);
app.listen(3000, function () { return console.log('Rodando na porta 3000'); });
