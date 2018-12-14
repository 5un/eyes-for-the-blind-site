import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Updates from '../sections/Updates';
import Team from '../sections/Team';
import Partners from '../sections/Partners';
import Contact from '../sections/Contact'

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Team />
    <Partners />
    <Updates />
    <Contact />
  </Layout>
);

export default IndexPage;
