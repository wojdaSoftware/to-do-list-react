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
        toggleHideFinished: state => {
            state.hideFinished = !state.hideFinished
        },
        markTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
    }
});

export const { addTask, toggleHideFinished, markTask } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;