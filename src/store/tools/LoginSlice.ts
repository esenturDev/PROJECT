import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.VITE_LOGIN_URL;

// eslint-disable-next-line react-hooks/rules-of-hooks

export const postLogin = createAsyncThunk(
	"login/postLogin",
	async (newData) => {
		try {
			const response = (await axios.post(url, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const deleteCards = createAsyncThunk('login/deleteCards', async (id) => {
	try {
		const response = (await axios.delete(`${url}/${id}`)).data;
		return response;
	} catch (error) {
		console.error(error);
	}
})

export const getResultsBekents = createAsyncThunk(
	"login/getResultsBekents",
	async (userLogin, userPassword) => {
		console.log(userLogin, userPassword);

		try {
			const response = (await axios.get(url)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const getUserProfile = createAsyncThunk(
	"login/getUserProfile",
	async () => {
		try {
			const response = (await axios.get(url)).data;
			console.log(response);

			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const deleteProfileCards = createAsyncThunk('login/deleteProfileCards', async (id) => {
	try {
		const response = (await axios.delete(`${url}/${id}`)).data;
		return response;
	} catch (error) {
		console.error(error);
	}
})

/* eslint-disable @typescript-eslint/no-unused-vars */
interface LoginAdmin {
	email: string;
	password: string;
	img: string;
}

const initialState: { data: LoginAdmin[] } = {
	data: [],
};
// console.log(initialState.data.email);

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		addTodo: () => {},
	},
	extraReducers: (builder) => {
		builder
			.addCase(postLogin.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(getUserProfile.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(getResultsBekents.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(deleteCards.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(deleteProfileCards.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	},
});

export const loginSliceResult = loginSlice.reducer;
