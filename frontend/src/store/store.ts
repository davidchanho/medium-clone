import localForage from "localforage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";

localForage.config({
  driver: localForage.INDEXEDDB,
});

const persistConfig = {
  key: "medium",
  storage: localForage,
  whitelist: ["posts"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger();

const middleware = [thunk, logger];

export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
