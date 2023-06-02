const express = require("express");
const contactsController = require("../../controllers/contact-controllers");
const isValidId = require("../../middlewares/isValidId");
const validFavoriteBody = require("../../middlewares/validFavorite");
const authenticate = require("../../middlewares/authenticate");
const {
  contactsAddSchema,
  updateFavoriteSchema,
} = require("../../models/contact");
const validateBody = require("../../decorators/validateBody");

const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(contactsAddSchema),
  contactsController.addContact
);

router.delete("/:contactId", isValidId, contactsController.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactsAddSchema),
  contactsController.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validFavoriteBody(updateFavoriteSchema),
  contactsController.updateFavoriteContact
);

module.exports = router;
