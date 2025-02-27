"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
(0, dotenv_1.config)(); // Load environment variables
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// JWT Middleware
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'your-secret-key', function (err, user) {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
// Protected route example
app.get('/api/protected', authenticateToken, function (req, res) {
    res.json({ message: 'Protected data' });
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
