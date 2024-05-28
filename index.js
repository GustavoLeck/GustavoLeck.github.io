"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
server_1.server.listen(5500, function () {
    console.clear();
    console.log("--Server ON--");
    console.log("Teste build");
});
