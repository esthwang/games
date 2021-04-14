import CrosswordListGrid, { CrosswordProps } from '../containers/CrosswordListGrid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../styles';
import { recordPageview } from '../globals/utils';


const Content = styled.div`
  padding-top: 4rem;
`;


interface Props {
  crosswords: CrosswordProps[],
}

const Index = (props: Props) => (
  <>
    <Navbar />
    <Content>
      <InnerContainer>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <CrosswordListGrid crosswords={props.crosswords} />
            </Col>
          </Row>
        </Grid>
      </InnerContainer>
    </Content>
    <Footer />
  </>
);

/*
 * Read the name, date, and number from a data file.
 * Previously this was all stored in the filename, but that didn't
 * support name punctuation.
 */
async function processCWFile(fname: string, index: number) : Promise<CrosswordProps> {
  const data = await import(`../crosswords/${fname}`);
  return { name: data.name, date: data.publishDate, index: index };
}

Index.getInitialProps = async function () {
  const cwFiles = await import('../data.json');
  const cwPreviews: CrosswordProps[] = await Promise.all(cwFiles.default.map((fname, i) =>
    processCWFile(fname, i)));
  cwPreviews.reverse();

  return { crosswords: cwPreviews };
}

Index.componentWillMount = function () {
  recordPageview('/crosswords');
}

export default Index;
