"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.LoginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const LoginHandler = (req, res) => {
    const token = jsonwebtoken_1.default.sign({ test: "test" }, "secret", {
        expiresIn: 60 * 60 * 24,
    });
    return res.json({
        token,
    });
};
exports.LoginHandler = LoginHandler;
const profileHandler = (req, res) => {
    return res.json({
        username: req.user,
        message: "profile data",
    });
};
exports.profileHandler = profileHandler;
