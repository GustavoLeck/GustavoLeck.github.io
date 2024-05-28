"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var status_route_1 = __importDefault(require("./routes/status-route"));
var user_route_1 = __importDefault(require("./routes/user/user-route"));
var server = (0, express_1.default)();
exports.server = server;
server.use(body_parser_1.default.json());
server.use("/api", status_route_1.default);
server.use("/api", user_route_1.default);
