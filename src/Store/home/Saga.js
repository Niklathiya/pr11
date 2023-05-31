import { call, put, takeLatest } from "redux-saga/effects";
import { get} from "../../utils/axios";
import { getHomeDataFailed, getHomeDataSuccess } from "./Actions";
import { GET_HOME_DATA_REQUEST} from "./Actiontypes";


function* getHomePageContent() {
  try {
    const response = yield call(get, `/posts`);

    yield put(getHomeDataSuccess(response));
  } catch (error) {
    
    yield put(getHomeDataFailed(error));
  }
}

function* contentSaga() {
  yield takeLatest(GET_HOME_DATA_REQUEST, getHomePageContent);
}

export default contentSaga;
