import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTUR_AUTH_MOGODB_URL as string);
const db = client.db("assigment_7")

export const auth = betterAuth({
  //...
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.BETTUR_AUTH_GOOGLE_CLIENT as string, 
            clientSecret: process.env.BETTUR_AUTH_GOOGLE_SECRET as string, 
        }, 
         github: { 
            clientId: process.env.BETTUR_AUTH_GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.BETTUR_AUTH_GITHUB_CLIENT_SECRETS as string, 
        }, 
    },
});