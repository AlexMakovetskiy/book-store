export interface ISignUpState {
	nameSurname: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ISignUpErrorState {
	nameSurname: boolean;
	email: boolean;
	password: boolean;
	confirmPassword: boolean;
}
