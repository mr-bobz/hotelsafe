import styled from 'styled-components';

const StyledBadge = styled.span`
  height: 25px;
  width: 25px;
  background-color:  ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  border: 3px solid black;
`;

export const Indicator = (props) => {
  let color;
  //RULE 7. Currently open safe should display a green light, locked should display a red light
  if(props.status == 'LOCKED'){
    color = 'red';
  }else{
    color = 'green';
  }
  return (
    <StyledBadge color={color}> </StyledBadge>
  );
}