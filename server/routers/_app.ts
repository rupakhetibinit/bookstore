import { z } from 'zod';
import { procedure, router } from '../trpc';

import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { AuthRequest } from '@lucia-auth/nextjs';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { auth } from '../../lib/lucia';
import { createContext } from '../../pages/api/trpc/[trpc]';

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
	hello: t.procedure
		.input(
			z.object({
				text: z.string(),
			})
		)
		.query(({ input }) => {
			return {
				greeting: `hello ${input.text}`,
			};
		}),
	user: t.procedure.query(async ({ ctx }) => {
		const { user } = await ctx.auth.validateUser();
		return user;
	}),
});
// export type definition of API
export type AppRouter = typeof appRouter;
