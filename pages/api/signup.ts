// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../lib/lucia';
import { AuthRequest } from '@lucia-auth/nextjs';

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
		const user = await auth.createUser('email', email, {
			password,
			attributes: {
				email,
			},
		});
		const session = await auth.createSession(user.userId);
		const authRequest = new AuthRequest(auth, req, res);
		authRequest.setSession(session); // set cookies
		return res.redirect(302, '/'); // redirect user on account creations
	} catch (e) {
		console.log(e);
		return res.status(400).json({}); // invalid
	}
};
