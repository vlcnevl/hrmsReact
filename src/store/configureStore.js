import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";//middleware
import rootReducer from "./rootReducer";

export function configureStore()
{
    return createStore(rootReducer,devToolsEnhancer())
}