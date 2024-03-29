import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage() || [],
        hideFinished: false,
        loading: false,
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
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
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
    setTasks,
    toggleLoading,
} = taskSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideFinished = state => selectTasksState(state).hideFinished;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectLoading = state => selectTasksState(state).loading;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toLowerCase().includes(query.trim().toLowerCase()));
};

export default taskSlice.reducer;