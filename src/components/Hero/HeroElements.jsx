/* eslint-disable */
import styled from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi';

export const HeroContainer = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 3rem;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    margin-bottom: 2rem;
`

export const ButtonWrapper = styled.div``

export const IconWrapper = styled.div``

export const Sun = styled(FiSun)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 55px;
  &:hover { 
    cursor: pointer;
    transform: scale(1.05);
    transition: scale(1s);
    color: ${(props) => props.theme.primaryHoverColorYellow};
  }
`;

export const Moon = styled(FiMoon)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 55px;
  &:hover { 
    cursor: pointer;
    transform: scale(1.05);
    transition: scale(1s);
    color: ${(props) => props.theme.primaryHoverColor};
  }
`;

export const IconContainer = styled.div``