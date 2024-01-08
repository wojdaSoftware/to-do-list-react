import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideFinished: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideFinished: state => {
            state.hideFinished = !state.hideFinished
        },
        markTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskObject }) => {
            const index = tasks.findIndex(task => task.id === taskObject);
            tasks.splice(index, 1);
        },
        markAllTasks: (state) => {
            state.tasks.forEach(task => task.done = true)
        },
    }
});

export const { addTask, toggleHideFinished, markTask, removeTask, markAllTasks } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;