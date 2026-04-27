// берём хуки из react-redux
import { useDispatch, useSelector } from "react-redux";

// импортируем ТОЛЬКО тип 
import type { TypedUseSelectorHook } from "react-redux";

// типы стора
import type { RootState, AppDispatch } from "./store";


// кастомный dispatch с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();

// кастомный selector с типизацией всего state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;