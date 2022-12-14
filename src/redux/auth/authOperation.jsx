import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
},
unset() {
    axios.defaults.headers.common.Authorization = '';
},
};

const register = createAsyncThunk('auth/registr', async user => {
    try {
        const { data } = await axios.post('/users/signup', user);
        return data;
    }
    catch (error) {
        alert(error.message);
    }
});

const logIn = createAsyncThunk('auth/login', async user => {
    try {
        const { data } = await axios.post('/users/login', user);
        token.set(data.token);
        return data;
    } catch (error) {
        alert(error.message);
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        alert(error.message);
    }
});

const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);

    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


const authOperetions = { register, logIn, logOut, refreshCurrentUser };

export default authOperetions;