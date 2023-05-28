const express = require("express");
const contactsController = require("../../controllers/contact-controllers");
const isValidId = require("../../middlewares/isValidId");
const {
  contactsAddSchema,
  updateFavoriteSchema,
} = require("../../models/contact");
const validateBody = require("../../decorators/validateBody");
const validFavoriteBody = require("../../middlewares/validFavorite");

const router = express.Router();

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
