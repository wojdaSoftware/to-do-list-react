import { useEffect, useState } from "react";

const useTasks = () => {
    const tasksLocalStorageKey = "tasks";
    const hideFinishedLocalStorageKey = "hideFinished";

    const getLocalStorageItem = (localStorageKey, noLocalStorageValue) => {
        return JSON.parse(localStorage.getItem(localStorageKey)) || noLocalStorageValue;
    };

    const [hideFinished, setHideFinished] = useState(getLocalStorageItem(hideFinishedLocalStorageKey, false));
    const [tasks, setTasks] = useState(getLocalStorageItem(tasksLocalStorageKey, []));

    useEffect(() => {
        localStorage.setItem(tasksLocalStorageKey, JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem(hideFinishedLocalStorageKey, JSON.stringify(hideFinished));
    }, [hideFinished]);

    const toggleHideFinished = () => {
        setHideFinished(hideFinished => !hideFinished);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const markTask = (id) => {
        setTasks(tasks => tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            };
            return task;
        }));
    };

    const markAllTasks = () => {
        setTasks(tasks => tasks.map((task) => {
            if (task.done === false) {
                return { ...task, done: !task.done };
            };
            return task;
        }))
    };

    const addTask = (content) => {
        if (content !== "") {
            setTasks(tasks => [
                ...tasks,
                {
                    id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                    content,
                    done: false,
                },
            ]);
        }
    }

    return { tasks, hideFinished, toggleHideFinished, removeTask, markTask, markAllTasks, addTask };
}

export default useTasks;