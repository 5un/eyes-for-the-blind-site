import React from 'react';
import { Heading, Text, Flex, Box, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import markdownRenderer from '../components/MarkdownRenderer';

const TeamMember = styled(Box)`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  color: white;
  padding: 20px;
  text-align: center;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;


const Background = () => (
  <div>
  </div>
);


const edgeToArray = data => data.edges.map(edge => edge.node);

const TeamMembers = () => (
  <Section.Container id="team" Background={Background} fillHeight={false}>
    <StaticQuery
      query={graphql`
        query TeamMemberQuery {
          contentfulAbout {
            teamSectionTitle
            teamSectionText {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            teamMembers {
              name
              title
              image {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <React.Fragment>
          <Section.Header name={contentfulAbout.teamSectionTitle} icon="" label={contentfulAbout.teamSectionTitle} />
          <ReactMarkdown
            source={contentfulAbout.teamSectionText.childMarkdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
          <Flex>
            {contentfulAbout.teamMembers.map(member => (
              <TeamMember width={[ 1, 1, 1 ]}>
                <Image src={member.image.image.src} width="200px" height="auto" style={{ borderRadius: '100px', margin: 'auto' }}/>
                <div style={{ textAlign: 'center' }}>
                  <h3>{member.name}</h3>
                  <div>
                    {member.title}
                  </div>
                </div>
              </TeamMember>
            ))}
            
          </Flex>
        </React.Fragment>
      )}
    />
    
  </Section.Container>
);

export default TeamMembers;
