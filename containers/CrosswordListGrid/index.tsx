import CrosswordPreview from '../../components/CrosswordPreview';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';


const Container = styled.div``;

interface CrosswordProps {
  name: string;
  date: string;
  index: number;
}

interface Props {
  crosswords: CrosswordProps[];
}

export default class CrosswordListGrid extends React.Component<Props, {}> {
  public render() {
    let crosswords = this.props.crosswords.map(cw => {
      return (
        <Col sm={6} md={4} lg={3} key={cw.index}>
          <CrosswordPreview 
            name={cw.name}
            date={cw.date}
            index={cw.index}
          />
        </Col>
      );
    });

    return (
      <Container>
        <Grid fluid>
          <Row>
            { crosswords }
          </Row>
        </Grid>
      </Container>
    );
  }
};

export { CrosswordProps };