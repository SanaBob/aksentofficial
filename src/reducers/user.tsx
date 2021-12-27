import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', email: '', password: ''} },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = {name: '', email: '', password: ''};
        }
    }
});

export default userSlice.reducer;
