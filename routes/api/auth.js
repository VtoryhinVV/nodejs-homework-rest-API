const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const validBody = require("../../decorators/validateBody");
const authenticate = require("../../middlewares/authenticate");
const validSubscription = require("../../middlewares/validSubscription");
const upload = require("../../middlewares/upload");
const validEmailBody = require("../../middlewares/validEmailBody");
const { schema } = require("../../models/user");

const router = express.Router();

router.post("/register", ctrl.register);

router.post("/login", validBody(schema.loginSchema), ctrl.login);

router.get("/verify/:verificationCode", ctrl.verify);

router.post(
  "/verify",
  validEmailBody(schema.emailSchema),
  ctrl.resendVerifyEmail
);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validSubscription(schema.updateSubscription),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.uploadAvatar
);

module.exports = router;
