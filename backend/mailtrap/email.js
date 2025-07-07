import { client, sender } from "./mailtrap-config.js";
import { verificationEmailTemplate } from "./mailTemp.js";
import { welcomeEmailTemplate } from "../mailtrap/mailTemp.js";

export const sendVerificationMail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: verificationEmailTemplate.replace("{code}", verificationToken),
            category: "Email Verification",
        });

        console.log("Verification email sent successfully:", response);


    } catch (error) {
        console.error("Error sending verification email:", error);
       throw new Error(`failed to send verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Welcome to Mia",
            html: welcomeEmailTemplate.replace("{name}", name),
            category: "Welcome Email",
        });
        console.log("Welcome email sent successfully:", response);
    } catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`failed to send welcome email: ${error}`);
    }
};
