import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url2 = import.meta.env.VITE_COMMIT_URL;

interface Commit {
  _id: number;
  commit: string;
}

export const postCommit = createAsyncThunk('column/postCommit', async ({newData, id} : Commit) => {
	try {
		const response = (await axios.put(`${url2}/${id}`, newData)).data;
		localStorage.setItem('commit', JSON.stringify(response))
		return response;
	} catch (error) {
		console.error(error)
	}
})


export const getCommit = createAsyncThunk('column/getCommit', async () => {
	try {
		const response = (await axios.get(url2)).data;
		return response;
	} catch (error) {
		console.error(error)
	}
})

const initialState: {data: Commit[]} = {
  data: [],
};

const CommitSlice = createSlice({
  name: 'commit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCommit.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(getCommit.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
})

export const commitSliceReducer = CommitSlice.reducer;