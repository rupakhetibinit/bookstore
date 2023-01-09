import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/_app';
// export API handler
// @see https://trpc.io/docs/api-handler

// src/pages/api/[trpc].ts
import { auth } from '../../../lib/lucia';
import { AuthRequest } from '@lucia-auth/nextjs';
import { initTRPC } from '@trpc/server';
import {
	createNextApiHandler,
	CreateNextContextOptions,
} from '@trpc/server/adapters/next';

export const createContext = (opts: CreateNextContextOptions) => {
	return {
		auth: new AuthRequest(auth, opts.req, opts.res),
	};
};

export default createNextApiHandler({
	router: appRouter,
	createContext,
});
