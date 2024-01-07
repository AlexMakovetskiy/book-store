import { BOOKSTORE_BACKEND_URL, LOGOUT_USER_ENDPOINT } from "./backendConstants";

export async function logoutUser(userToken: string) {
	return await fetch(`${BOOKSTORE_BACKEND_URL}/${LOGOUT_USER_ENDPOINT}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `APIKey ${userToken}`,
		},
	});
}
