import { ISignupUserData } from '../../../types/api/ApiTypes';

import { BOOKSTORE_BACKEND_URL, REGISTER_USER_ENDPOINT } from './backendConstants';

export async function signupUser(signupUserData: ISignupUserData) {
    return await fetch(`${BOOKSTORE_BACKEND_URL}/${REGISTER_USER_ENDPOINT}`, {
        method: 'POST',
        body: JSON.stringify(signupUserData),
        headers: {
            'Content-Type': 'application/json',
        },    
    });
}