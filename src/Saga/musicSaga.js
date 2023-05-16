import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {addListMusic, getListMusic} from "../stores/container";

function* fetchListMusic({payload = ''}) {
    if (payload === '') {
        yield put(addListMusic([]))
        return;
    }
    const response = yield call(() => axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(payload)}`))
    yield put(addListMusic(response.data.results))
}

export function* musicSaga() {
    yield takeLatest(getListMusic.type, fetchListMusic)
}