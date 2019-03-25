import { combineReducers } from "redux";
import { editorReducer } from "src/pages/editor/reducer";

const RootReducers = combineReducers({
  editorStore: editorReducer
});

export type RootState = NonNullable<Parameters<typeof RootReducers>[0]>;

export default RootReducers;
