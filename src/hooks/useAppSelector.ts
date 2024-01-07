import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "../services/redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
