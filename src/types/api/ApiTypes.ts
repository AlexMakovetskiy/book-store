export interface ISignupUserData {
    name: string,
    email: string,
    password: string,
}

export interface ILoginData {
    email: string,
    password: string,
}

export interface IUserDataResponse {
    id: string;
    name: string;
    email: string;
}

export interface IUserFetchedData {
    user: IUserDataResponse
}

export interface IAuthorizationData {
    statusCode: string,
    message: string,
    description: string,
}

export type UpdatedDataType = ISignupUserData & {
    userEmail: string;
}

export type EmailDataType = Omit<ILoginData, 'password'>;