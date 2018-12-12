import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Label } from 'rebass';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import SoundBeaconBackground from '../components/SoundBeaconBackground'

/*
const SoundBeaconBackground = styled.div`
  background-image: url(../components/EmbeddedImages/interior-sobel.jpg);
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

`
*/

const Background = () => (
  <SoundBeaconBackground>
    {/*
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    */}

  </SoundBeaconBackground>
);

const LandingPage = () => (
  <Section.Container id="home" Background={SoundBeaconBackground}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign="left"
              is="h1"
              color="primary"
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`${name}`}
            </Heading>

            <Heading
              is="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[2, 4]}
              textAlign="center"
            >
              {/*
              <TextLoop>
                {roles.map(text => (
                  <p style={{ width: 400 }} key={text}>
                    {text}
                  </p>
                ))}
              </TextLoop>
              */}
            </Heading>
            
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {/* socialLinks.map(({ id, ...rest }) => (
                <Label mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink
                    color="primary"
                    hoverColor="primaryLight"
                    {...rest}
                  />
                </Label>
              )) */}
              
            </Flex>
            <MouseIcon />
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
