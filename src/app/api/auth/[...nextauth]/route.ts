import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET}),
        Github({
            clientId: process.env.AUTH_SECRET,
            clientSecret: process.env.AUTH_GOOGLE_ID
        }),
    ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

// export default NextAuth(authOptions)
