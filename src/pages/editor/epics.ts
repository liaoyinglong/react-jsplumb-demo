import { Epic } from "redux-observable";
import { RootState } from "src/store/reducers";
import {
  delaySetCurrentOperationType,
  IEditorActions,
  resetToSelect,
  setCurrentOperationType
} from "src/pages/editor/action";
import { delay, filter, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { operationType } from "src/pages/editor/components/LeftContainer";

type IEditorEpics = Epic<IEditorActions, any, RootState>;

const delayEpics: IEditorEpics = action$ => {
  return action$.pipe(
    filter(isActionOf(delaySetCurrentOperationType)),
    map(action => action.payload),
    delay(1000),
    map(type => setCurrentOperationType(type))
  );
};

const resetToSelectEpics: IEditorEpics = action$ => {
  return action$.pipe(
    filter(isActionOf(resetToSelect)),
    map(() => setCurrentOperationType(operationType.select))
  );
};

export const editorEpics = [delayEpics, resetToSelectEpics];
