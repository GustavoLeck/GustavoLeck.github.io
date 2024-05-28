"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var create_user_controller_1 = require("../../controllers/user/create-user-controller");
var consult_user_controller_1 = require("../../controllers/user/consult-user-controller");
var update_user_controller_1 = require("../../controllers/user/update-user-controller");
var delete_user_controller_1 = require("../../controllers/user/delete-user-controller");
var router = express_1.default.Router();
router.post("/user", new create_user_controller_1.CreateUserController().handle);
router.get("/user", new consult_user_controller_1.ConsultUserController().handle);
router.put("/user", new update_user_controller_1.UpdateUserController().handle);
router.delete("/user", new delete_user_controller_1.DeleteUserController().handle);
exports.default = router;
