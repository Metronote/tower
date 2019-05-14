import { call, put } from 'redux-saga/effects';
import {
    alertPush,
    getCurrentUserData,
    GetCurrentUserFetch,
} from '../../../';
import { API, RequestOptions } from '../../../../api';

const requestOptions: RequestOptions = {
    apiVersion: 'barong',
};

export function* getCurrentUserSaga(action: GetCurrentUserFetch) {
    try {
        const user = yield call(API.get(requestOptions), '/resource/users/me');
        yield put(getCurrentUserData(user.data));
    } catch (error) {
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
