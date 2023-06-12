const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_NET_MAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_MAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { from: UKR_NET_MAIL, ...data };

  try {
    await transport.sendMail(email);
    console.log("Send");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = sendEmail;
