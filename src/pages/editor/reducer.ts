import {
  IEditorActions,
  setCurrentOperationType
} from "src/pages/editor/action";
import { operationType } from "src/pages/editor/components/LeftContainer";
import { getType } from "typesafe-actions";
let initialState = {
  currentOperationType: operationType.select
};

export type IEditorStoreState = Readonly<typeof initialState>;

export const editorReducer = (
  state: IEditorStoreState = initialState,
  action: IEditorActions
): IEditorStoreState => {
  switch (action.type) {
    case getType(setCurrentOperationType):
      return { ...state, currentOperationType: action.payload };

    default:
      return state;
  }
};
