import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Text, Flex, Box, Label } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import SocialLink from '../components/SocialLink';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';


const FooterContainer = styled.footer`
  padding: 3em 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: white;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <StaticQuery
      query={graphql`
        query SiteFooterQuery {
          contentfulAbout {
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
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Label mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink
                    color="primary"
                    hoverColor="primaryLight"
                    {...rest}
                  />
                </Label>
              ))}
              
            </Flex>
          </Fragment>
        );
      }}
    />

    <Fade bottom>
      <span>
        {/*
        <Text
          mb={2}
          pb={1}
          css={{
            textTransform: 'uppercase',
            borderBottom: 'white 3px solid',
            display: 'table',
          }}
        >
          Powered By
        </Text>
        */}
      </span>
      <Flex justifyContent="center" alignItems="center">
        <p>Copyright 2018 Eyes for the Blind, All Rights Reserved.</p>
        {/*
        <Logo
          url="https://www.contentful.com/"
          logo={ContentfulLogo}
          alt="Powered by Contentful"
        />
        <Text m={2} fontSize={4}>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Text>
        <Logo
          url="https://www.gatsbyjs.org/"
          logo={GatsbyLogo}
          alt="Gatsby Logo"
        />
        */}
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
