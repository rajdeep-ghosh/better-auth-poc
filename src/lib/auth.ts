import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins"

import { db } from "./db";

export const auth = betterAuth({
  appName: "Better Auth POC",
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "sqlite",
    usePlural: true
  }),
  emailAndPassword: {
    enabled: true
  },
  plugins: [
    openAPI()
  ],
  advanced: {
    cookiePrefix: "better-auth-poc",
  }
});
