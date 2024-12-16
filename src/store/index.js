import { loadState } from "../services/persist.service";
import configureStore from './../configure-store';

const initialState = loadState();
const store = configureStore(initialState);
export default store;