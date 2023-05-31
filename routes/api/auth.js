const express = require("express");

const ctrl = require("../../controllers/auth");

const validBody = require("../../decorators/validateBody");
const authenticate = require("../../decorators/authenticate");

const { schema } = require("../../models/user");

const router = express.Router();

router.post("/register", validBody(schema.registerSchema), ctrl.register);

router.post("/login", validBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
