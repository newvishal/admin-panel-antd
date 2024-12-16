import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

export default function configureStore(
    initialState = {},
    additionalMiddleware = []
) {
    let composeEnhancers = compose;
    let reduxSagaMonitorOptions = {};

    if (typeof window === 'object') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
        }

        if (window.__SAGA_MONITOR_EXTENSION__) {
            reduxSagaMonitorOptions = window.__SAGA_MONITOR_EXTENSION__;
        }
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    const middlewares = [sagaMiddleware];

    const enhancers = [applyMiddleware(...additionalMiddleware, ...middlewares)];

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {};
    store.injectedSagas = {};

    // if (module.hot) {
    //     module.hot.accept('./reducers', () => {
    //       store.replaceReducer(createReducer(store.injectedReducers));
    //     });
    // }

    return store;
}