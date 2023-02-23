import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user: user.reducer
});

const persistConfig = {
    key: "root",
    // sessionStorage 저장합니다.
    storage,
    // user 만 저장
    whitelist: ["user"]
    // blacklist -> 그것만 제외합니다
};

const persist = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persist,
})

const persistor = persistStore(store)

export { store, persistor };