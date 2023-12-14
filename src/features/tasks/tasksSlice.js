import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideFinished: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideFinished: state =>{
            state.hideFinished = !state.hideFinished
        },
    }
});

export const { addTask, toggleHideFinished } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;