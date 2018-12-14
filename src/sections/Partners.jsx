import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import markdownRenderer from '../components/MarkdownRenderer';

const Partner = styled(Box)`
  position: relative;
  display: inline-block;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  color: white;
  text-align: center;
  padding: 1em;
  vertical-align: middle;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
  
`;

// const partners = [
//   {
//     "name": "UC Berkeley, School of Information",
//     "image": "/images/partners-ischool.png"
//   },
//   {
//     "name": "VR@Berkeley",
//     "image": "/images/partners-vrberkeley.png"
//   },
//   {
//     "name": "VoiceCorps",
//     "image": "/images/partners-voicecorps.png"
//   },
// ]


const Background = () => (
  <div>
  </div>
);


const edgeToArray = data => data.edges.map(edge => edge.node);

const Partners = () => (
  <Section.Container id="partners" Background={Background} fillHeight={false}>
    <StaticQuery
      query={graphql`
        query PartnersQuery {
          contentfulAbout {
            partnerSectionTitle
            partnerSectionText {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            partners {
              name
              linkUrl
              logo {
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
          <Section.Header name={contentfulAbout.partnerSectionTitle} icon="" label={contentfulAbout.partnerSectionTitle} />
          <ReactMarkdown
            source={contentfulAbout.partnerSectionText.childMarkdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
          <div>
            {contentfulAbout.partners.map(partner => (
              <Partner width={[ 1, 1, 1/3 ]} key={partner.name}>
                <a href={partner.linkUrl}><img src={partner.logo.image.src} style={{ maxWidth: '300px', maxHeight: '120px' }}/></a>
              </Partner>
            ))}
          </div>
        </React.Fragment>
      )}
    />

    
  </Section.Container>
);

export default Partners;
