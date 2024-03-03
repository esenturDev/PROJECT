import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { loginSlice } from "./tools/LoginSlice"; // Поправьте путь к файлу LoginSlice
import {columnSliceResults} from './tools/ColumnSlice';
import {loginSliceResult} from './tools/LoginSlice'
import {PhotosIsBekents} from './tools/PhotosSlice';
import {commitSliceReducer} from './tools/CimmitSlice';
export const store = configureStore({
	reducer: {
		loginSliceResult,
		columnSliceResults,
		PhotosIsBekents,
		commitSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
