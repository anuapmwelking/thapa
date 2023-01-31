const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //connect with smtp
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,

    auth: {
      user: "greg39@ethereal.email",
      pass: "MufvQ3AyWc7Ru21bCn",
    },
  });
  let info = await transporter.sendMail({
    from: '"Anupam Singh 👻" <anupamtest@gmail.com>', // sender address
    to: "anupamwelkin@gmail.com, anupamsingh2389@gmail.com", // list of receivers
    subject: "Hello anupam✔", // Subject line
    text: "Hello anupam this is text world?", // plain text body
    html: "<b>Hello hylo world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
};
module.exports = sendMail;
