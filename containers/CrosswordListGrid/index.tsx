import CrosswordPreview from '../../components/CrosswordPreview';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';


const Container = styled.div``;

export default class CrosswordListGrid extends React.Component<{}, {}> {
  public render() {
    return (
      <Container>
        <Grid fluid>
          <Row>
            <Col sm={6} md={4} lg={3}>
              <CrosswordPreview
                name="Bids and Bibs"
                date="Dec. 27, 2018"
                image={new URL('https://picsum.photos/200')}
                byline={["John Marish", "Euirim Choi"]}
                style={{flexGrow:1}}
              />
            </Col>
            <Col sm={6} md={4} lg={3}>
              <CrosswordPreview
                name="New World"
                date="Dec. 27, 2018"
                image={new URL('https://picsum.photos/200?random')}
                byline={["John Marish", "Euirim Choi", "Tim Cook"]}
                style={{flexGrow:1}}
              />
            </Col>
            <Col sm={6} md={4} lg={3}>
              <CrosswordPreview
                name="New World"
                date="Dec. 27, 2018"
                image={new URL('https://picsum.photos/200?random')}
                byline={["John Marish"]}
                style={{flexGrow:1}}
              />
            </Col>
            <Col sm={6} md={4} lg={3}>
              <CrosswordPreview
                name="New World"
                date="Dec. 27, 2018"
                image={new URL('https://picsum.photos/200?random')}
                byline={["John Marish"]}
                style={{flexGrow:1}}
              />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
};