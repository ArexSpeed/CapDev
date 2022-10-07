import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import authorizeUser from 'services/users/authorize';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await authorizeUser({
          email: credentials?.email ? credentials.email : '',
          password: credentials?.password ? credentials.password : ''
        });
        //console.log(user, 'user in async');

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    }
  }
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.name = user?.name;
  //       token.id = user?.id;
  //       token.email = user?.email;
  //     }
  //     console.log(user, 'user in token');

  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.user.id = token.id;
  //     session.user.name = token.name;
  //     console.log(session, 'session in session');
  //     return session;
  //   }
  // }
});
