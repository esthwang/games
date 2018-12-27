import Navbar from '../components/Navbar';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';


const Content = styled.div`
  padding-top: 3rem;
`;

const Index = () => (
  <>
    <Navbar />
    <Content>
      <Grid fluid>
        <p>Hello</p>
      </Grid>
    </Content>
  </>
);

export default Index;