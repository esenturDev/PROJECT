import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BEKENTS_URL;

export const postBekents = createAsyncThunk(
	"column/postBekents",
	async (newData) => {
		try {
			const response = (await axios.post(url, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const getBekents = createAsyncThunk("column/getBekents", async () => {
	try {
		const response = (await axios.get(url)).data;
		return response;
	} catch (error) {
		console.error(error);
	}
});

export const patchCard = createAsyncThunk(
	"column/patchCard",
	async ( newData, id ) => {
		// Используем деструктуризацию объекта с аргументами
		console.log(id);
		console.log(newData);

		try {-
			const response = (await axios.patch(`${url}/${id}`, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

interface Columns {
	_id: number;
	name: string;
}

interface ColumnTodoList extends Columns {
	title: string;
	columns: Columns[];
}

const initialState: { data: ColumnTodoList[] } = {
	data: [],
};

const ColumnSlice = createSlice({
	name: "column",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postBekents.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(getBekents.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(patchCard.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	},
});

export const columnSliceResults = ColumnSlice.reducer;
