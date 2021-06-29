const AWS = require("aws-sdk");

// Create a new SES object. 
const ses = new AWS.SES();

const params = { 
  Source: "sender@sender.com", // use the verified email address 
  Destination: { 
    ToAddresses: [
      "recipient@email.com" 
    ],
  },
  Message: {
    Subject: {
      Data: "Subject",
      Charset: "UTF-8"
    },
    Body: {
      Html: {
        Data: "HTML String here",
        Charset: "UTF-8"
      }
    }
  }
};

// using callback
ses.sendEmail(params, function(err, data) {
  if(err) {
    console.log(err.message);
  } else {
    console.log("Email sent");
  }
});