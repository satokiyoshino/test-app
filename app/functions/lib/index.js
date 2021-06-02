"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const functions = __importStar(require("firebase-functions"));
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
const nextApp = next_1.default({ dev: false });
const handle = nextApp.getRequestHandler();
exports.main = functions.https.onRequest(async (req, res) => {
    const app = express_1.default();
    app.use('/api', api_1.router);
    app.get('*', async (req, res) => {
        await nextApp.prepare();
        handle(req, res);
    });
    app(req, res);
});
