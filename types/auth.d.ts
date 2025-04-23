import type { UserSession } from "#auth-utils";

// auth.d.ts
declare module "#auth-utils" {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface User extends UserSession {}
}

export {};
