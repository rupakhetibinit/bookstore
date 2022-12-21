// pages/api/login.ts
import { AuthRequest } from '@lucia-auth/nextjs';
import { Role } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../lib/lucia';
import { prisma } from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST')
		return res.status(404).json({ error: 'Not found' });
	const { email, password } = JSON.parse(req.body);
	if (
		!email ||
		!password ||
		typeof email !== 'string' ||
		typeof password !== 'string'
	)
		return res.status(400).json({});
	try {
		const authRequest = new AuthRequest(auth, req, res);
		const user = await auth.authenticateUser('email', email, password);
		const session = await auth.createSession(user.id);
		authRequest.setSession(session); // set cookie
		const adminOrNot = await prisma.user.findUnique({
			where: {
				email: email,
			},
			select: {
				role: true,
			},
		});
		console.log(adminOrNot);
		if (adminOrNot?.role !== Role.ADMIN) {
			return res.redirect(302, '/forbidden');
		} else {
			return res.redirect(302, '/admin'); // redirect to admin page
		}
	} catch {
		// invalid
		return res.status(200).json({
			error: 'Incorrect username or password',
		});
	}
};
