import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ debug: true, publicRoutes: [
  "/api/:storeId/categories",
  "/api/:storeId/billboards",
  "/api/:storeId/colors",
  "/api/:storeId/products",
  "/api/:storeId/stores",
  "/api/:storeId/checkout"
],});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};