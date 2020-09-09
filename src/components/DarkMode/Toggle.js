import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';


const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

`;


const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.gradient};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: ${({ theme }) => theme.sliderPosition};
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background: ${({ theme }) => theme.gradient};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <Switch className="switch" 
      >
      <Input 
      type="checkbox"/>
      <Slider className="slider"  lightTheme={isLight} onClick={toggleTheme}/>
    </Switch>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;