// import type { UserSession } from './users';

// auth.d.ts
declare module '#auth-utils' {
	// interface User extends UserSession {}
	interface User {
		id: number;
		firstname: string;
		lastname: string;
		email: string;
	}
}

export {};
