import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', email: '', password: '', address: '', orders: [[]], role: '' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = { name: '', email: '', password: '', address: '', orders: [[]] , role: ''};
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
