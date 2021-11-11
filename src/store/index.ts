import { configureStore, combineReducers } from "@reduxjs/toolkit";

import repositories from "./repositories";
import developers from "./developers";

import RepositoryInterface from "@/shared/interface/repository"
import DevelopersInterface from "@/shared/interface/developer"

export interface RootState {
  repositories: RepositoryInterface[];
  developers: DevelopersInterface[];
}

const reducer = combineReducers({
  repositories: repositories.reducer,
  developers: developers.reducer,
});

export default configureStore({
  reducer,
});
