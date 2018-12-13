import React from 'react';
import { Heading, Text, Flex, Box, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const TeamMember = styled(Box)`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  color: white;
  padding: 20px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;


const teamInfo = [
  {
    "name": "Dylan Fox",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/dylan_fox_headshot_0.jpg?itok=h7eHda8T&c=afffff4139753f465fc9488b6c65562f",
    "title": "Masters Student, UC Berkeley School of Information"
  },
  {
    "name": "Soravis Prakkamakul",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/_mg_9698.jpg?itok=HIp4LgPU&c=c08198472ac335eb63deab5e4699b1c0",
    "title": "Masters Student, UC Berkeley School of Information"
  },
  {
    "name": "Alyssa Li",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/img_1718_copy.jpg?itok=2K7UeDMx",
    "title": "Masters Student, UC Berkeley School of Information"
  },
  {
    "name": "Ankit Bansal",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/i-school-head-shots-2018-09-19-086.jpg?itok=Yi_hyUUt&c=f0f54ff0772a5b0a1793db144a4c058a",
    "title": "Masters Student, UC Berkeley School of Information"
  },
  {
    "name": "Neha Mittal",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/professional_headshot_pic_0.jpg?itok=J6KN3JUH&c=ba100fa889ff1e6d1aa9a009876c0c3d",
    "title": "Masters Student, UC Berkeley School of Information"
  },
  {
    "name": "Anu Pandey",
    "image": "https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/906790_580681098617055_637201516_o_0.jpg?itok=A4L50I8D&c=c9470bc7a9b94eb139bdf2a90c23641c",
    "title": "Masters Student, UC Berkeley School of Information"
  }
]


const Background = () => (
  <div>
  </div>
);


const edgeToArray = data => data.edges.map(edge => edge.node);

const TeamMembers = () => (
  <Section.Container showInMenu={false} Background={Background} fillHeight={false}>
    <Section.Header name="The Team" icon="" label="The Team" />
    <Flex>
      {teamInfo.map(member => (
        <TeamMember width={[ 1/4, 1/4, 1 ]}>
          <Image src={member.image} width="200px" height="auto" style={{ borderRadius: '100px' }}/>
          <div style={{ textAlign: 'center' }}>
            <h3>{member.name}</h3>
            <div>
              {member.title}
            </div>
          </div>
        </TeamMember>
      ))}
      
    </Flex>
  </Section.Container>
);

export default TeamMembers;
