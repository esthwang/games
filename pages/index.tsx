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
          <CrosswordListGrid crosswords={props.crosswords} />
        </Grid>
      </InnerContainer>
    </Content>
    <Footer />
  </>
);

/*
 * Turn array of crossword filenames to crossword objects.
 */
function processCWFiles(ls: string[]): Crossword[] {
  return ls.map((fname, i) => {
    let procString = fname.trim();
    let comps = procString.substring(0, procString.length - 5).split(' ');
    let date = comps[0];
    let name = comps.splice(1, comps.length - 1).join(' ');
    return {name: name, date: date, index: i};
  });
}

Index.getInitialProps = async function () {
  const cwFiles = await import('../data.json'); 

  return { crosswords: processCWFiles(cwFiles.default) };
}

Index.componentWillMount = function () {
  recordPageview('/crosswords');
}

export default Index;