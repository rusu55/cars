import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


console.log(process.env.GOOGLE_ID)
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
    ],
    callbacks:{
        async session({session}){
            //const sessionUser = await User.findOne({ email: session.user.email})
            //session.user.id = sessionUser._id;           
            return session;
        },
        async signIn({ profile}){
            try{               
                return true;
            }catch(error){
                console.log(error)
                return false;
            }
        },
    }
}) 

export {handler as GET, handler as POST};