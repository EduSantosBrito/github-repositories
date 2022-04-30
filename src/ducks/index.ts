import { combineReducers } from "@reduxjs/toolkit";
import homepage, { State as HomepageState } from "./homepage";
import results, { State as ResultsState } from "./results";

export type RootState = {
    homepage: HomepageState;
    results: ResultsState;
};

export default combineReducers({
    homepage,
    results,
});
