import {
  TypedUseSelectorHook,
  useDispatch as useDispatch_,
  useSelector as useSelector_,
} from 'react-redux';
import type { RootState, AppDispatch } from '../../slices';

/** Typed useDispatch */
const useDispatch = () => useDispatch_<AppDispatch>();

/** Typed useSelector */
const useSelector: TypedUseSelectorHook<RootState> = useSelector_;

export { useDispatch, useSelector };
