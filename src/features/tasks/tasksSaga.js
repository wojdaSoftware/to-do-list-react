import { takeEvery, call, put, takeLatest, select, delay, all } from "redux-saga/effects";
import { setTasks, fetchExampleTasks, selectTasks, toggleLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield put(toggleLoading());
        yield delay(1500);
        const exampleTasks = yield call(getExampleTasks);
        yield all([
            put(toggleLoading()),
            put(setTasks(exampleTasks)),
        ])
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};