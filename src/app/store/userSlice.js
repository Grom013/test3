import {createSlice} from '@reduxjs/toolkit';
import {users} from "../api/data";

const usersSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        toggleIsRead: (state, action) => {
            const itemId = action.payload;
            const item = state.find(item => item.id === itemId);
            if (item) {
                item.isRead = !item.isRead;
            }
        },
    },
});
export const {addUser, toggleIsRead} = usersSlice.actions;
export default usersSlice.reducer;