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
        markTask: ({ tasks }, { payload: taskObject }) => {
            const index = tasks.findIndex(task => task.id === taskObject);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskObject }) => {
            const index = tasks.findIndex(task => task.id === taskObject);
            tasks.splice(index, 1);
        },
        markAllTasks: ({ tasks }) => {
            tasks.forEach(task => task.done = true)
        },
    }
});

const selectTasksState = state => state.tasks;

export const {
    addTask,
    toggleHideFinished,
    markTask,
    removeTask,
    markAllTasks
} = taskSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideFinished = state => selectTasksState(state).hideFinished;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default taskSlice.reducer;