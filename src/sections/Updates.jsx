import React from 'react';
import { Subhead, Image, Text, Flex, Label, Heading } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import ReactMarkdown from 'react-markdown';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
  </div>
);

const TextContainer = styled.div`
  display: flex;
  width: calc(100% - 100px);
  flex-direction: column;
  padding: 10px;

  @media (min-width: 400px) {
    width: calc(100% - 200px);
  }
`;


const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /*
    border-bottom: ${props => props.theme.colors.primary} 5px solid;
  */
`;

const BlogPost = ({ name, body, image, externalLinkUrl, publishedDate }) => {
  // const timestamp = `${date} - ${Math.ceil(time)} min`;
  return (
    <Card
      onClick={() => window.open(url, '_blank')}
      css={{ cursor: 'pointer' }}
      p={0}
    >
      <EllipsisHeading m={3} p={1}>
        {name}
      </EllipsisHeading>
      {image && <CoverImage src={image.image.src} height="200px" alt={name} />}
      <Text m={3}>
        <ReactMarkdown
          source={body.childMarkdownRemark.rawMarkdownBody}
          renderers={markdownRenderer}
        />
      </Text>
      {/*
        <ImageSubtitle bg="primaryLight" color="white">
          {timestamp}
        </ImageSubtitle>
      */}
    </Card>
  );
};

const Updates = () => (
  <Section.Container id="updates" Background={Background}>
    <Section.Header name="Updates" icon="" label="notebook" />
    <StaticQuery
      query={graphql`
        query BlogPostQuery {
          contentfulAbout {
            updates {
              name
              body {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              publishedDate(formatString: "YYYY")
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
        <CardContainer minWidth="350px">
          {contentfulAbout.updates.map((p, i) => (
            <Fade bottom delay={i * 200}>
              <BlogPost key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Updates;
