import { UpdatedDataType } from '../../../types/api/ApiTypes';

import { BOOKSTORE_BACKEND_URL, UPDATE_USERDATA_ENDPOINT } from './backendConstants';

export async function updateUserData(updatedData: UpdatedDataType, userToken: string) {
    return await fetch(`${BOOKSTORE_BACKEND_URL}/${UPDATE_USERDATA_ENDPOINT}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `APIKey ${userToken}`,
        },
        body: JSON.stringify(updatedData),
    });
}
