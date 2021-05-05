import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
  key: "medium",
  storage,
  whitelist: ["posts", "publications", "comments", "topics"],
  blacklist: ["users"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
