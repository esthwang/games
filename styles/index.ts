import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  font-size: 100%;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
}

* {
  font-family: "Verlag A", "Verlag B";
  font-style: normal;
  color: #333333;
  line-height: 1.4;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.375rem;
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  font-size: 1.375rem;
  font-weight: 300;
  font-style: normal;
}
a {
  text-decoration: none;
}
`;

const Theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  },
  colors: {
    primary: '#9b2743',
    secondary: '#b9d3dc',
    brightness_0: '#2a2c30',
    brightness_20: '#545659',
    brightness_50: '#949597',
    brightness_70: '#bfbfc0',
    brightness_80: '#d4d4d5',
    brightness_90: '#e9e9ea',
    brightness_100: '#ffffff',
  }
}

const InnerContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 801px) and (max-width: 1199px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export { GlobalStyle, Theme, InnerContainer };