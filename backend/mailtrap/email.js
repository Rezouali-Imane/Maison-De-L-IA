import { client, sender } from "./mailtrap-config.js";
import { 
    resetPassSuccessEmailTemplate,
    verificationEmailTemplate,
    welcomeEmailTemplate,
    resetPassEmailTemplate
} from "./mailTemp.js";

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

export const sendResetPassEmail = async (email, resetLink) => {
    const recipient = [{ email }];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: resetPassEmailTemplate.replace("{resetLink}", resetLink),
            category: "Password Reset",
        });
    } catch (error) {
        console.error("Error sending reset password email:", error);
        throw new Error(`failed to send reset password email: ${error}`);
    }
}

export const sendPasswordResetEmail = async (email) => {
    const recipient = [{ email }];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Request",
            html: resetPassSuccessEmailTemplate,
            category: "Password Reset Confirmation"
        });

        console.log("Password reset email sent successfully:", response);

    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`failed to send password reset email: ${error}`);
    }
};