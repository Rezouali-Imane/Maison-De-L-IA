import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.mailtrapTOKEN;
const ENDPOINT = process.env.mailtrapENDPOINT;

export const client = new MailtrapClient({token: TOKEN,endpoint: ENDPOINT});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};


