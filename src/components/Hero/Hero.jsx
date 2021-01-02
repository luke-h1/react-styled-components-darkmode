import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '../../styles/Themes';

import {
  HeroContainer,
  Title,
  ButtonWrapper,
  IconContainer,
  Sun,
  Moon,
} from './HeroElements';

const Hero = ({ toggleTheme, theme }) => (
  <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <HeroContainer>
        <Title>My workflow for setting up a dark theme with styled-components & React</Title>
        <ButtonWrapper>
          <IconContainer>
            {theme === 'light' ? (
              <Moon onClick={toggleTheme} />
            ) : (
              <Sun onClick={toggleTheme} />
            )}
          </IconContainer>
        </ButtonWrapper>
      </HeroContainer>
    </ThemeProvider>
  </>
);

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
export default Hero;
