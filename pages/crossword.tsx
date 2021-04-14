import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../styles';
import { recordPageview } from '../globals/utils';
import { NextPageContext } from 'next';
import { withRouter } from 'next/router';


// To enable work with static export, as crossword 
// needs window object.
const CW: any = dynamic(import('@chicagomaroon/react-crossword'), {
  ssr: false
})


interface Props {
  data: any;
  router: any;
};

const HeaderContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.brightness_80};
  margin-bottom: 1.5rem;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`;
const Title = styled.h1`
  display: inline;
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
const Timestamp = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0;
`;
const Byline = styled.h2`
  display: inline;
  font-weight: normal;
  font-size: 1rem;
  margin-top: 24px;
  margin-bottom: 0;
  float: right;
  @media (max-width: 800px) {
    display: inline-block;
    float: left;
    margin-top: 0;
  }
`;
const Person = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

function createByline(ls: string): JSX.Element[] {
  let bylineItems: JSX.Element[] = [];
  bylineItems.push(<>By</>);
  for (let i = 0; i < ls.length; i++) {
    if (i === ls.length - 1) {
      bylineItems.push(<Person> {ls[i]}</Person>);
      continue
    }

    let suffix = "";
    if (ls.length > 2) {
      suffix += ",";
    }
    if (i === ls.length - 2) {
      suffix += " and ";
    }

    bylineItems.push(
      <>
        <Person> {ls[i]}</Person>
        {suffix}
      </>
    );
  }

  return bylineItems;
}
const Crossword: any = withRouter((props: Props) => (
  <>
    <Navbar />

    <HeaderContainer>
      <InnerContainer>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Timestamp>{dayjs(props.data.date).format('MMM. D, YYYY')}</Timestamp>
              <Title>{props.data.name}</Title>
              <Byline>{createByline(props.data.byline)}</Byline>
            </Col>
          </Row>
        </Grid>
      </InnerContainer>
    </HeaderContainer>
    <InnerContainer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <CW data={props.data} id={props.data.id} />
          </Col>
        </Row>
      </Grid>
    </InnerContainer>
    <Footer />
  </>
));

Crossword.getInitialProps = async function ({ req, query }: NextPageContext) {
  if (query && query.id) {
      const cwFiles: string[] = await import('../data.json');
      const id: number = typeof query.id === "string" ? parseInt(query.id) : parseInt(query.id[0]);
      const data = await import(`../crosswords/${cwFiles[id]}`);
      // record pageview if data exists
      if (data !== undefined) {
        recordPageview(`/crosswords/${query.id}`);
      }

      return { data: data };
  } else
      return {};
}

export default Crossword;
