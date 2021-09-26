import styled from 'styled-components';

import { Keypad } from '../../components/Keypad';
import { Display } from '../../components/Display';
import { Indicator } from '../../components/Indicator';
// import { setPinAction, } from './SafePanel.actions';

import { useSelector, useDispatch } from 'react-redux';
import {
  typePIN,
  clearPIN,
  setPIN,
  selectDisplayValue,
  selectLockStatus,
} from './SafePanel.slice';

const StyledPanel = styled.div`
  background-color: #293f55;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  @media (max-width: 800px) {
      flex-direction: column;
  }
`;

const StyledDisplayUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SafePanel = () => {

  const displayValue = useSelector(selectDisplayValue);
  const lockStatus = useSelector(selectLockStatus);
  const dispatch = useDispatch();

  return (
    <StyledPanel>
      <Keypad
        handleNumber={(key) => dispatch(typePIN(key))}
        handleClear={(key) => dispatch(clearPIN(key))}
        handleEnter={(key) => dispatch(setPIN(key))}
      />
      <StyledDisplayUnit>
        <Display value={displayValue} />
        <Indicator status={lockStatus} />
      </StyledDisplayUnit>
    </StyledPanel>
  );
}