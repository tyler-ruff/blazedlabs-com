import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient(); 

export const authOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // Include user.id on session
  // @Source = https://stackoverflow.com/questions/74147383/how-to-use-numeric-user-id-with-next-auth
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        //if (typeof user.id !== "number") throw new Error("id should a number");
        session.user.id = user.id // OK
        // session.user.id = +user.id // more dangerous but still works
        // session.user.id = user.id as number // also dangerous
      }
      return session
    }
  },
  /*
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  */
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);