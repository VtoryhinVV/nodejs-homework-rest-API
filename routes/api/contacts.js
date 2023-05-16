const express = require("express");
const contactsController = require("../../controllers/contact-controllers");

const { contactsAddSchema } = require("../../schemas/contacts-schema");
const validateBody = require("../../decorators/validateBody");

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getContactById);

router.post(
  "/",
  validateBody(contactsAddSchema),
  contactsController.addContact
);

router.delete("/:contactId", contactsController.deleteContact);

router.put(
  "/:contactId",
  validateBody(contactsAddSchema),
  contactsController.updateContactById
);

module.exports = router;
