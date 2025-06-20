import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

// Define User type
interface User {
  id: number;
  name: string;
  email: string;
}

// Define Credentials type
interface Credentials {
  username: string;
  password: string;
}

// NextAuth configuration
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials: Record<'username' | 'password', string> | undefined, req: Request): Promise<User | null> => {
        if (!credentials) return null;

        const { username, password } = credentials;

        // Example logic to verify credentials
        if (username === 'user' && password === 'password') {
          const user: User = { id: 1, name: 'User', email: 'user@example.com' };
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    strategy: 'jwt', // Specify to use JWT for sessions
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      // Ensure session.user matches the User type
      if (token) {
        session.user = {
          id: token.id as number,
          name: token.name as string,
          email: token.email as string,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user?: User }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    }
  }
};

export default NextAuth(authOptions);
