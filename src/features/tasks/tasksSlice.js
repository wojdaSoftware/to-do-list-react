import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage() || [],
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
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        }
    }
});

const selectTasksState = state => state.tasks;

export const {
    addTask,
    toggleHideFinished,
    markTask,
    removeTask,
    markAllTasks,
    fetchExampleTasks,
    setTasks
} = taskSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideFinished = state => selectTasksState(state).hideFinished;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTaskById = (state, taskId) => selectTasks(state).find(({id}) => id === taskId);

export default taskSlice.reducer;