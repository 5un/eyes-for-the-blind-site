import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from '../components/ImageSubtitle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
  </div>
);

const Contact = () => (
  <Section.Container id="contact" Background={Background} fillHeight={false}>
    <StaticQuery
      query={graphql`
        query ContactSectionQuery {
          contentfulAbout {
            contactSectionTitle
            contactSectionText {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <React.Fragment>
          <Section.Header name={contentfulAbout.contactSectionTitle} icon="" label={contentfulAbout.contactSectionTitle} />
          <ReactMarkdown
            source={contentfulAbout.contactSectionText.childMarkdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
        </React.Fragment>
      )}
    />

    
  </Section.Container>
);

export default Contact;
