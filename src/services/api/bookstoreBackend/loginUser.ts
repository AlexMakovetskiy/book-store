import { ILoginData } from "../../../types/api/ApiTypes";

import { BOOKSTORE_BACKEND_URL, LOGIN_USER_ENDPOINT } from "./backendConstants";

export async function loginUser(loginData: ILoginData) {
	return await fetch(`${BOOKSTORE_BACKEND_URL}/${LOGIN_USER_ENDPOINT}`, {
		method: "POST",
		body: JSON.stringify(loginData),
		headers: {
			"Content-Type": "application/json",
		},
	});
}
