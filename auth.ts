import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma as unknown as PrismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
});
