import bcrypt from "bcryptjs";
import User from "@/models/user";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/utils/dbConnect";
import paths from "@/utils/paths";

const authOptions = {
  pages: {
    signIn: paths.login(),
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAdmin = auth?.user?.role === 'admin';
      const isOnAdminPage = nextUrl.pathname.startsWith(paths.admin());
      if (isOnAdminPage && !isAdmin) {
        return false;
      }
      return true;
    }
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        await dbConnect();

        const user = await User.findOne({ email });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid email or password');
        }

        const isPasswordMatched = await bcrypt.compare(password, user.hashedPassword);

        if (!isPasswordMatched) {
          throw new Error('Invalid email or password');
        }

        return user;
      }
    })
  ],
};

export default authOptions;
