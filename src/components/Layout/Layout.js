import React from 'react';
import classes from './Layout.css'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 16px;
  color: palevioletred;
`;


const Layout = (props) => (
    <>
        <div>Toolbar,Sidebar, Backdrop</div>
        <Main className={classes.Content}>
            {props.children}
        </Main>
    </>
);

export default Layout