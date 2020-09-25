"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var node_fetch_1 = __importDefault(require("node-fetch"));
function testFetch(url) {
    node_fetch_1.default(url).then(function (res) { res.json(); }).then(function (data) { console.log(data); });
}
//# sourceMappingURL=gettingStarted.js.map