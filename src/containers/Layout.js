import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Content = styled.div`
  min-height: 50vh;
`;

function Layout(props) {
  return (
    <>
      <Navbar />
      <Content>
        <main>{props.children}</main>
      </Content>
      <Footer />
    </>
  );
}

export default Layout;
