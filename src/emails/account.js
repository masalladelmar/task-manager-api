const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'masalladelmar@gmail.com',
    subject: 'Welcome to the Task Manager App!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'masalladelmar@gmail.com',
    subject: 'Goodbye from Task Manager App!',
    text: `We're sorry to see you go ${name}. If there's anything we could be done to keep you using the app, please let us know.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}