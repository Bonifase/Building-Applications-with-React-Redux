import { applyMiddleware, compose, createStore } from "redux";
import rootRducer from "./reducers";

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools.
    return createStore(
        rootRducer,
        initialState,
        composeEnhancers(applyMiddleware())
    );
}