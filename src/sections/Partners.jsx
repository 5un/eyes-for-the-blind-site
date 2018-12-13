import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Partner = styled(Box)`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  color: white;
  text-align: center;
  padding: 1em;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
  
`;

const partners = [
  {
    "name": "UC Berkeley, School of Information",
    "image": "/images/partners-ischool.png"
  },
  {
    "name": "VR@Berkeley",
    "image": "/images/partners-vrberkeley.png"
  },
  {
    "name": "VoiceCorps",
    "image": "/images/partners-voicecorps.png"
  },
]


const Background = () => (
  <div>
  </div>
);


const edgeToArray = data => data.edges.map(edge => edge.node);

const Partners = () => (
  <Section.Container showInMenu={false} Background={Background} fillHeight={false}>
    <Section.Header name="Partners" icon="" label="Partners" />
    <Flex>
      {partners.map(partner => (
        <Partner width={[ 1/3, 1/3, 1 ]} key={partner.name}>
          <img src={partner.image} style={{ maxWidth: '300px', maxHeight: '120px' }}/>
        </Partner>
      ))}
      
    </Flex>
  </Section.Container>
);

export default Partners;
