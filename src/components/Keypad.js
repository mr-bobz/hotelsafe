import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styled from 'styled-components';
import { Key } from './Key';

export const StyledKeypad = styled.div`
  border: 1px solid black;
  background-color: #666666; 
  padding: 10px;
  margin: 20px;
`;

export const Keypad = (props) => {

  const {handleNumber, handleClear, handleEnter} = props;

  return (
    <StyledKeypad>
      <ButtonGroup>
        <Key label='1' onClick={handleNumber} />
        <Key label='2' onClick={handleNumber} />
        <Key label='3' onClick={handleNumber} />
      </ButtonGroup><br />
      <ButtonGroup>
        <Key label='4' onClick={handleNumber} />
        <Key label='5' onClick={handleNumber} />
        <Key label='6' onClick={handleNumber} />
      </ButtonGroup><br />
      <ButtonGroup>
        <Key label='7' onClick={handleNumber} />
        <Key label='8' onClick={handleNumber} />
        <Key label='9' onClick={handleNumber} />
      </ButtonGroup><br />
      <ButtonGroup>
        <Key label='CLR' onClick={handleClear} />
        <Key label='0' onClick={handleNumber} />
        <Key label='⇨' onClick={handleEnter} />
      </ButtonGroup>
    </StyledKeypad>
  );
}