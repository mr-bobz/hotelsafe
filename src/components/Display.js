import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const StyledCode = styled(Form.Control)`
  border: 5px solid black;
  border-radius: 10px;
  font-size: larger;
  text-align: center;
  height: 80px;
  width: 350px;
  margin: 20px;
  :disabled{
    background-color: #9ea18b;
  }
`;

export const Display = (props) => {
  return (
    <Form>
      <StyledCode id="code" disabled value={props.value}/>
    </Form>
  );
}