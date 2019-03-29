import { Button } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { setCurrentOperationType } from 'src/pages/editor/action';
import { RootState } from 'src/store/reducers';

const styles = require('./LeftContainer.module.css');

/**
 * 操作按钮枚举
 */
export enum operationType {
  select = '选择',
  start = '开始',
  task = '任务',
  cond = '条件',
  subflow = '子流',
  link = '连线',
  end = '结束'
}

const operationArr = [
  operationType.start,
  operationType.task,
  operationType.cond,
  operationType.subflow,
  operationType.end
];

const mapStateToProps = (state: RootState) => {
  return {
    currentOperationType: state.editorStore.currentOperationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ setCurrentOperationType }, dispatch);
};
type ILeftContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const _LeftContainer: React.FunctionComponent<ILeftContainerProps> = props => {
  return (
    <div className={styles.leftContainer}>
      <div>
        当前操作项:
        <br />
        {props.currentOperationType}
      </div>

      {operationArr.map(item => (
        <Button
          className={styles.leftContainer}
          onClick={() => props.setCurrentOperationType(item)}
          key={item}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export const LeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LeftContainer);
