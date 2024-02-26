import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
// An array of public routes that don't require authentication.
publicRoutes: ["/api/webhook/clerk"],

// An array of routes to be ignored by the authentication middleware.
ignoredRoutes: ["/api/webhook/clerk"],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};