// lib/lucia.ts
import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();
export const auth = lucia({
	adapter: prisma(prismaClient),
	env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
	// transformUserData: (userData: UserData) => {
	// 	return { id: userData.id, email: userData.email };
	// },
});

export type Auth = typeof auth;
