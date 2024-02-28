// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const url = import.meta.env.VITE_PHOTOS_URL;
// export  const getPhotosResult = createAsyncThunk('photos/getPhotosResult', async () => {
//   try {
//     const response = (await axios.get(url)).data;
//     return response;
//   } catch (error) {
//     console.error(error)
//   }
// })

// export const getPhotos = createAsyncThunk('photos/getPhotos', async (url1) => {
//   try {
//     const response=  (await axios.get(`${url1}`)).data;
//     return response;
//   } catch (error) {
//     console.error(error)
//   }
// })

// interface Photos {
//   logo: string;
// }

// const initialState: {data: Photos[]} = {
//   data: [],
// }

// const PhotosSlice = createSlice({
//   name: 'photos',
//   initialState,
//   reducers: {

//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getPhotosResult.fulfilled, (state, action) => {
//       state.data = action.payload;
//     })
//     .addCase(getPhotos.fulfilled, (state, action) => {
//       state.data = action.payload;
//     })
//   }
// })

// export const PhotosIsBekents = PhotosSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_PHOTOS_URL;
export const getPhotosResult = createAsyncThunk(
	"photos/getPhotosResult",
	async () => {
		try {
			const response = (await axios.get(url)).data;
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

// export const getPhotos = createAsyncThunk(
// 	"photos/getPhotos",
// 	async () => {
// 		try {
// 			const response = (await axios.get(url)).data;
// 			return response;
// 		} catch (error) {
// 			console.error(error);
// 			throw error;
// 		}
// 	}
// );

interface Photo {
	logo: string;
}

interface PhotosState {
	data: Photo[];
}

const initialState: PhotosState = {
	data: [],
};

const PhotosSlice = createSlice({
	name: "photos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPhotosResult.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			;
	},
});

export const PhotosIsBekents = PhotosSlice.reducer;
