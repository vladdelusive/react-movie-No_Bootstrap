import { put, takeEvery, call, all } from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {select} from 'redux-saga/effects'
import {IStore} from "react-app-env";

function* fetchTopActors() {
    const {page} = yield select(({actors}: IStore)=>actors.topActors)
    try {
        const results = yield call(API.TRENDY_ACTORS, page);
        yield put(actions.saveActors(guards.actData(results)))
    } catch(e) {
        console.error(e)
    }
}

export function* watchRequestTopActors() {
    yield takeEvery(types.GET_TOP_ACTORS, fetchTopActors);
}

function* fetchActorData(action: any) {
    const { id }: {id: number} = action
    try {
        const { actorDetails, actorMovies } = yield all({
            actorDetails: call(API.ACTOR_DETAILS, {personId: id}),
            actorMovies: call(API.ACTOR_MOVIES, {personId: id})
        });
        yield put(actions.setActorIdData({person: guards.detailsAct(actorDetails), movies: guards.actorMovies(actorMovies), id: id}))
    } catch(e) {
        console.error(e)
    }
}

export function* watchRequestActor() {
    yield takeEvery(types.GET_ACTOR_INFO, fetchActorData);
}
