import {TypedUseSelectorHook, useSelector} from "react-redux";
import { store } from "../store/store";

type StateStore = ReturnType<typeof store.getState>;

const useSelectorTyped: TypedUseSelectorHook<StateStore> = useSelector;

export default useSelectorTyped;