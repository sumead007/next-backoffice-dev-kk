import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "./saga";
import createSagaMiddleware, { Task } from 'redux-saga';
export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const makeStore: MakeStore<any> = (context: Context) => {
    // 1: Create the middleware
    const sagaMiddleware = createSagaMiddleware();

    // 2: Add an extra parameter for applying middleware:
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    // 3: Run your sagas on server
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    // 4: now return the store:
    return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<any>(makeStore, { debug: true });