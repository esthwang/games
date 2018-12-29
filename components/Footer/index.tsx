import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../../styles';


const FooterContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.brightness_80};
  margin-top: 1rem;
`;

const Copyright = styled.p`
  font-size: 1rem;
`;

const Footer = () => (
  <FooterContainer>
    <InnerContainer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Copyright>&copy; 2018 The Chicago Maroon</Copyright>
          </Col>
        </Row>
      </Grid>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;
