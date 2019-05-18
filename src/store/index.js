import { createStore } from "redux";
// import { contacts } from "../static-data";
import reducer from "../reducers";

const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 

export default store;
