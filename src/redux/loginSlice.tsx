import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    logged: boolean;
}

const initialState: LoginState = {
    logged: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => { 
            state.logged = true;
        },
        logout: (state) => {
            state.logged = false;
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
