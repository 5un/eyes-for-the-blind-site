import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    {/*
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
    */}
  </div>
);

const youtubeOpts = {
  height: '390',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutSectionTitle
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            extendedAboutContent {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
            videoYouTubeId
          }
        }
      `}
      render={data => {
        const { aboutMe, aboutSectionTitle, extendedAboutContent, profile, videoYouTubeId } = data.contentfulAbout;
        return (
          <React.Fragment>
            <Section.Header name={aboutSectionTitle} icon="" label="person" />
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 3 / 6]}>
                <Fade bottom>
                  <div style={{ paddingRight: '10px' }}>
                    <ReactMarkdown
                      source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                      renderers={markdownRenderer}
                    />
                  </div>
                </Fade>
              </Box>

              <Box width={[1, 1, 3 / 6]}>
                <Fade right>
                  <YouTube
                    videoId={videoYouTubeId}
                    opts={youtubeOpts}
                  />
                  {/*
                  <ProfilePicture
                    src={profile.image.src}
                    alt={profile.title}
                    mt={[4, 4, 0]}
                    ml={[0, 0, 1]}
                  />
                  */}
                </Fade>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 1]}>
                <ReactMarkdown
                  source={extendedAboutContent.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Box>
            </Flex>
          </React.Fragment>
        );
      }}
    />
  </Section.Container>
);

export default About;
