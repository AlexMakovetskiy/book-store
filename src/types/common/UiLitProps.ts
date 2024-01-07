import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface IPopUpState {
	isOpenPopup: boolean;
	textMessege: string;
	popupLogo: boolean;
}

export interface IAuthInput {
	type: HTMLInputTypeAttribute;
	placeholder: string;
	name: string;
	onChange: ChangeEventHandler<HTMLElement> | undefined;
	error?: string;
}

export interface IPopup {
	title: string;
	logo: boolean;
	handleClose: () => void;
}
