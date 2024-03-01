/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BEKENTS_URL;

interface CardsResults {
	_id: number;
	newData: {
		title: string;
		column: [
			{
				_id: number;
				name: string;
				commit: string;
			}
		];
	};
}

export const putEditResult = createAsyncThunk(
	"column/putEditResult",
	async ({ newData, _id }: CardsResults) => {
		try {
			const response = (await axios.put(`${url}/${_id}`, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const patchCommit = createAsyncThunk(
	"column/patchCommit",
	async ({ newData, id }: CardsResults) => {
		console.log(newData, id);
		
		try {
			const response = (await axios.patch(`${url}/${id}`, newData)).data;
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
	async ({ newData, _id }: CardsResults) => {
		console.log(_id);
		console.log(newData);

		try {
			const response = (await axios.patch(`${url}/${_id}`, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const deleteCards = createAsyncThunk(
	"column/deleteCards",
	async (id) => {
		try {
			const response = (await axios.delete(`${url}/${id}`)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

interface ColumnTodoList {
	title: string;
}

const initialState: { data: ColumnTodoList[] } = {
	data: [],
};

export const postBekents = createAsyncThunk(
	"column/postBekents",
	async (newData: ColumnTodoList) => {
		try {
			const response = (await axios.post(url, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

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
			})
			.addCase(deleteCards.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(putEditResult.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(patchCommit.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	},
});

export const columnSliceResults = ColumnSlice.reducer;
