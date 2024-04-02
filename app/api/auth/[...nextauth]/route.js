import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import connectDB from "@/lib/mongodb";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ user, account, profile }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        try {
          const { email, name, googleId } = profile;
          await User.create({ name, email, googleId });
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
