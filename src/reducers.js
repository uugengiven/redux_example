import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: []
    },
    reducers: {
        set_movies: (state, action) => {
            state.movies = action.payload;
            console.log(action);
        }
    }    
});

export const { set_movies } = moviesSlice.actions;
export default moviesSlice.reducer;