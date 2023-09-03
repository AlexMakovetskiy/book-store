export interface IUserAccauntState {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export interface IUserAccauntErrorState {
    userName: boolean,
    email: boolean,
    password: boolean,
    confirmPassword: boolean,
}