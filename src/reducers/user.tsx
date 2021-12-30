import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', email: '', password: '', address: '', telephone: '', orders: [[]], role: '', cart: [{}] }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = { name: '', email: '', password: '', address: '', telephone: '', orders: [[]], role: '', cart: action.payload.cart };
        },
        addCart: (state, action) => {
            state.value.cart.push(action.payload);
        },
        removeCart: (state, action) => {
            state.value.cart.splice(action.payload.idx , 1);
        },
        updateCart: (state, action) => {
            state.value.cart[action.payload.index] = action.payload.item;
        },
        updateUser: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { login, logout, addCart, removeCart } = userSlice.actions;

export default userSlice.reducer;
