"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var server = new server_1.Server().app;
var port = process.env.PORT || 8000;
server.listen(port, function () {
    console.log("==> Open server running on http://localhost:" + port);
});
