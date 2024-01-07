import { EmailDataType } from "../../../types/api/ApiTypes";

import { BOOKSTORE_BACKEND_URL, SUBSCRIBE_NEWSLETTER_ENDPOINT } from "./backendConstants";

export async function subscribeToNewsletter(emailData: EmailDataType) {
	return await fetch(`${BOOKSTORE_BACKEND_URL}/${SUBSCRIBE_NEWSLETTER_ENDPOINT}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(emailData),
	});
}
