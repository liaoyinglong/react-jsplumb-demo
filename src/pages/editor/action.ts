import { createStandardAction, ActionType } from "typesafe-actions";
import { operationType } from "src/pages/editor/components/LeftContainer";

const SET_CURRENT_OPERATION_TYPE = "@@editor/设置当前操作类别";
const DELAY_SET_CURRENT_OPERATION_TYPE = "@@editor/延迟设置当前操作类别";
const RESET_TO_SELECT = "@@editor/重置为连线模式";

export const setCurrentOperationType = createStandardAction(
  SET_CURRENT_OPERATION_TYPE
)<operationType>();

export const delaySetCurrentOperationType = createStandardAction(
  DELAY_SET_CURRENT_OPERATION_TYPE
)<operationType>();

export const resetToSelect = createStandardAction(RESET_TO_SELECT)<void>();

export type IEditorActions =
  | ActionType<typeof setCurrentOperationType>
  | ActionType<typeof delaySetCurrentOperationType>
  | ActionType<typeof resetToSelect>;


