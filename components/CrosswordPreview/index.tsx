import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  date: string;
  image: string;
  byline: [string];
}

const Container = styled.div`
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.brightness_80}; 
  display: flex;
  flex-direction: column;
  height: 100%;
`;
/*j
const ImageContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.brightness_80}; 
  flex-grow: 0;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
*/
const Body = styled.div`
  text-align: center;
`;
const HeaderContainer = styled.div`
  padding: 0 1rem 0 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.brightness_80}; 
  flex-grow: 0;
`;
const Header = styled.h2`
  font-size: 1.5rem;
`;
const Timestamp = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  margin-bottom: -1rem;
`;
const Byline = styled.p`
  color: ${props => props.theme.colors.brightness_50};
  font-size: 0.9rem;
  padding: 0 1rem 0 1rem;  
`;
const Person = styled.span`
  color: ${props => props.theme.colors.brightness_50};
  font-weight: bold;
  text-transform: uppercase;
`;


export default class CrosswordPreview extends React.Component<Props, {}> {
  public render() {
    let bylineItems: JSX.Element[] = [];
    bylineItems.push(<>By</>);
    for (let i = 0; i < this.props.byline.length; i++) {
      if (i === this.props.byline.length - 1) {
        bylineItems.push(<Person> {this.props.byline[i]}</Person>);
        continue
      }

      let suffix = "";
      if (this.props.byline.length > 2) {
        suffix += ",";
      }
      if (i === this.props.byline.length - 2) {
        suffix += " and ";
      }

      bylineItems.push(
        <>
          <Person> {this.props.byline[i]}</Person>
          {suffix}
        </>
      );
    }

    return (
      <Container>
        <Body>
          <HeaderContainer>
            <Timestamp>{this.props.date}</Timestamp>
            <Header>{this.props.name}</Header>
          </HeaderContainer>
          <Byline>{bylineItems}</Byline>
        </Body>
      </Container>
    );
  }
};