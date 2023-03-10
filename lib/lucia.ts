// lib/lucia.ts
import lucia, { UserData } from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();
export const auth = lucia({
	adapter: prisma(prismaClient),
	env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
	transformUserData: (userData: UserData) => {
		return { email: userData.email, id: userData.id };
	},
});

export type Auth = typeof auth;
