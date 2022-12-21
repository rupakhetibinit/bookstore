// lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('./lib/lucia').Auth;
	type UserAttributes = {
		email: string;
	};
}
