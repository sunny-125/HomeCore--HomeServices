import { authMiddleware } from '@descope/nextjs-sdk/server';

export default authMiddleware({
  projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,

  // Agar login nahi hai to yaha redirect hoga
  redirectUrl: '/sign-in',

  // Ye pages login ke bina open ho sakte hain
  publicRoutes: [
    '/',
    '/sign-in'
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api)(.*)'],
};