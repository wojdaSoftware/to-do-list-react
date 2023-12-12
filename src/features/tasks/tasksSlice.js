import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        }
    }
});

export const { addTask } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;