import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
    user: user.reducer,
});

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장
    whitelist: ["user"]
    // blacklist -> 그것만 제외합니다
};

const persist = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persist
})

export default store;