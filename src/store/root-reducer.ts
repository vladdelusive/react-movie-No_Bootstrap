import { reducer as searchReducer } from "./search/reducer";
import { combineReducers } from "redux";
import { reducer as moviesReducer} from "store/new-movies/reducer";
import { reducer as actorsReducer} from "store/top-actors/reducer";
import { reducer as actorReducer} from "store/actor/reducer";
import { reducer as movieReducer} from "store/movie/reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
  actors: actorsReducer,
  actorInfo: actorReducer,
  movieInfo: movieReducer,
});