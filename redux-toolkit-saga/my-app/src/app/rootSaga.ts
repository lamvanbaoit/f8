import {all} from 'redux-saga/effects'
import counterSaga from 'features/counter/counterSaga';
import counterSaga2 from 'features/counter/counterSaga2';

function* helloSaga() {
    console.log('Saga2');
}

export default function* rootSaga() {
    console.log('rootSaga1');

    yield all([
        helloSaga(),
        counterSaga(),
        counterSaga2(),
    ])
}

