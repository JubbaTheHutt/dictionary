import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
    'mainSlice/fetchData',
    async (word, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            return response.data[0];
        } catch (e) {
            return rejectWithValue(e.response.status);
        }
    }
);

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        status: 'idle',
        colorMode: window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
        response: {},
        phonetic: '',
        audio: '',
        error: '',
        word: '',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setAudio: (state, action) => {
            state.audio = action.payload;
        },
        setWord: (state, action) => {
            state.word = action.payload;
        },
        setColorMode: (state) => {
            state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.response = action.payload;
                console.log(action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log('error');
                state.status = 'error';
                state.error = action.payload;
            });
    },
});
export const { setText, setAudio, setWord, setColorMode } = mainSlice.actions;
export default mainSlice.reducer;
