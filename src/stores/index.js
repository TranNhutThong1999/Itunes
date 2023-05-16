import {configureStore} from "@reduxjs/toolkit";
import container from "./container";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {container},
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);