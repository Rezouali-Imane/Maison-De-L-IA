export const verificationEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #020E1E, #020E1E); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
     <p>Hello,</p>
  <p>Thank you for signing up on <strong>Mia</strong>!</p>
  <p>To get started, please verify your email address using the code below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #020E1E;">{code}</span>
    </div>
     <p>This code is valid for <strong>24 hours</strong>.</p>
  <p>If you didn’t create an account on Mia, you can safely ignore this message.</p>
  <p>Warm regards,<br>The Mia Website Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;


export const welcomeEmailTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome to Mia</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #f9f9f9;">

      <div style="background-color: #0a0f1a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to Mia</h1>
      </div>

      <div style="padding: 40px 30px; color: #1a1a1a; font-size: 16px; line-height: 1.6;">
        <p>Hello <strong>{name}</strong>,</p>
        <p>We're excited to welcome you to <strong>Mia</strong> your new space for creativity, collaboration, and digital expression.</p>
        <p>Your account is now active and you're all set to begin exploring what Mia has to offer.</p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="<!--we'll add the website link here later-->" style="background-color: #0a0f1a; color:rgb(255, 255, 255); text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; display: inline-block;">Go to Mia</a>
        </div>

        <p>If you have any questions, our support team is here to help.</p>
        <p>Enjoy the journey,<br>The Mia Team</p>
      </div>

      <div style="text-align: center; font-size: 12px; color: #999; padding: 20px 10px; background-color: #f8f8f8;">
        <p>This is an automated message. Please do not reply to this email.</p>
      </div>

    </div>
  </body>
</html>

`;