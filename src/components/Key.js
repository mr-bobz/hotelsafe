import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledKey = styled.div`
  padding: 5px;
  .btn-lg{
    width: 100px;
  }
`;

export const Key = (props) => {
  function handleClick(){
    props.onClick?.(props.label);
  }
  return (
    <StyledKey>
      <Button variant="light" size="lg" onClick={handleClick}>{props.label}</Button>    
    </StyledKey>
  );
}