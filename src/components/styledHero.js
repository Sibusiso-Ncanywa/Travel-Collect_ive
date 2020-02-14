import styled from "styled-components";
import defaultImg from "../assets/images/Durban/d3.jpg";

const StyledHero = styled.div`
  color: white;
  font-size: 1.5rem;
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  width: 98.5vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
