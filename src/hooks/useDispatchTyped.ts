import { useDispatch } from 'react-redux';

import { store } from '../store/store';

type DispatchTyped = typeof store.dispatch;

const useDispatchTyped = () => useDispatch<DispatchTyped>();

export default useDispatchTyped;