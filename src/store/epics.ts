import { editorEpics } from "src/pages/editor/epics";
import { combineEpics } from "redux-observable";

export const RootEpics = combineEpics(...editorEpics);
