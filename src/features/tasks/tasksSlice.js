import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: ({tasks}, {payload}) => {
            tasks.push(payload);
        }
    }
})