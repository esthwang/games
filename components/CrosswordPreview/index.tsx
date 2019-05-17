import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  date: string;
  index: number;
}

const Container = styled.div`
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.brightness_80}; 
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Body = styled.div`
  text-align: center;
`;
const HeaderContainer = styled.div`
  padding: 0 1rem 0 1rem;
  // border-bottom: 1px solid ${props => props.theme.colors.brightness_80}; 
  flex-grow: 0;
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
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


export default class CrosswordPreview extends React.Component<Props, {}> {
  public render() {
    return (
      <Container>
        <Body>
          <HeaderContainer>
            <Timestamp>{this.props.date}</Timestamp>
            <Link 
              as={`/crossword/${this.props.index}`} 
              href={`/crossword?id=${this.props.index}`}
            >
              <a>
                <Header>{this.props.name}</Header>
              </a>
            </Link>
          </HeaderContainer>
        </Body>
      </Container>
    );
  }
};