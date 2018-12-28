import CrosswordListGrid from '../containers/CrosswordListGrid';
import Navbar from '../components/Navbar';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../styles';


const Content = styled.div`
  padding-top: 4rem;
`;

const Index = () => (
  <>
    <Navbar />
    <Content>
      <InnerContainer>
        <Grid fluid>
          <CrosswordListGrid />
        </Grid>
      </InnerContainer>
    </Content>
  </>
);

export default Index;