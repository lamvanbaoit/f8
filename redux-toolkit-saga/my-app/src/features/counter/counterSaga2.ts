import { delay, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

export function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting 1s');
    // Wait 1s
    yield delay(1000);

    // Dispatch action success
    console.log('Waiting done, dispatch action')
    yield put(incrementSagaSuccess(action.payload))
    
}

export default function* counterSaga2() {    
    console.log('bao');
    
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}
