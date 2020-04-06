"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostGetAllAction_1 = require("./controller/PostGetAllAction");
var PostGetByIdAction_1 = require("./controller/PostGetByIdAction");
var PostSaveAction_1 = require("./controller/PostSaveAction");
exports.AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: PostGetAllAction_1.postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: PostGetByIdAction_1.postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: PostSaveAction_1.postSaveAction
    }
];
//# sourceMappingURL=routes.js.map