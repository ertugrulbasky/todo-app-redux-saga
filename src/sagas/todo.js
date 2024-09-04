import { put, call, takeEvery, all } from "redux-saga/effects";
import api from "../service/api";
import { fetchTodo } from "../store/actions/todo";

export function* fetchTodos() {
  try {
    const data = yield call(api.request, { url: `todos` });
    yield put(fetchTodo(data.todos));
  } catch (e) {
    console.log(e.message);
  }
}

export function* deleteTodos(action) {
  try {
    const data = yield call(api.request, {
      method: "DELETE",
      url: `delete-todo/${action.id}`,
    });
    yield fetchTodos();
  } catch (e) {
    console.log(e.message);
  }
}

export function* updateTodos(action) {
  try {
    const data = yield call(api.request, {
      method: "PUT",
      url: `update-todo/${action.id}`,
      data: action.data,
    });
    yield fetchTodos();
  } catch (e) {
    console.log(e.message);
  }
}

export function* crateTodos(action) {
  try {
    const data = yield call(api.request, {
      method: "POST",
      url: `create-todo`,
      data: action.data,
    });
    yield fetchTodos();
  } catch (e) {
    console.log(e.message);
  }
}

function* watchTodoAction() {
  yield takeEvery("DELETE", deleteTodos);
  yield takeEvery("ADD", crateTodos);
  yield takeEvery("UPDATE", updateTodos);
}

export default function* rootSaga() {
  yield all([fetchTodos(), watchTodoAction()]);
}
