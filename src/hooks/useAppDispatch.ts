import { useDispatch } from "react-redux";

import { store } from "../services/redux";

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
