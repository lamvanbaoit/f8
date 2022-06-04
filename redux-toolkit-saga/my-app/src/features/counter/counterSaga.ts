import { takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

export function* log(action: PayloadAction) {
    console.log('Saga con trong Saga3 chỉ khi click vào đk ở trong yield: ', action);
}

export default function* counterSaga() {
    console.log('Saga3');
    
    yield takeEvery('counter/decrement', log)
}
