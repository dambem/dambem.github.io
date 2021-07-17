import React, { useState,Component, forwardRef, useRef, useMemo } from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom"
import {
  Anchor,
  Box,
  Button,
  Collapsible,
  Heading,
  Header,
  Menu,
  Grommet,
  Layer,
  Grid,
  Image,
  Distribution,
  Text,
  ResponsiveContext,
  grommet,
  Stack,
  Footer,
  Main,
} from 'grommet';
import {deepMerge} from "grommet/utils";
import {portfolio_theme} from "./portfolio-theme";
import { FormClose, Notification, Menu as MenuIcon } from 'grommet-icons';
import styled from 'styled-components';
import { Twitter, Github, Linkedin, CaretDown, Achievement} from 'grommet-icons';
import './index.css'
const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;
const theme = deepMerge(grommet, portfolio_theme);
// const theme = {
//   global: {
//     colors: {
//       brand: '#272727',
//       brand2: '#2B50AA',
//       brand3: '#FF9FE5',
//       brand4: '#FFD4D4',
//       brand5: '#FF858D',
//     },
//     font: {
//       family: 'Inconsolata',
//       size: '14px',
//       height: '20px',
//     },
//   },
// };

const SideBarContent = () => (
  <div>
    Some content
  </div>
);

const DoubleFooter = () => (
  <Grommet theme={grommet}>
    <Main background="light-4" elevation="large" pad="large" border>
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>

  </Grommet>
);

const Distribution_ex = () => (


<Distribution
  
  values={[
    { value: 50, color: 'light-3', src:"/sheffsense.jpg"},
    { value: 30, color: 'brand', src:"/diss.PNG" },
    { value: 20, color: 'graph-0', src:"/mapofsensors.PNG" },
    { value: 10, color: 'brand', src:"/sela.png" },
    { value: 5, color: 'light-3', src:"/particlephotography.PNG" },
    
  ]}
>
  {value => (
    // <Box pad="small" background={value.color} fill>
    <Box fill>
    {/* <Text size="large">{value.value}</Text> */}
      <Image src={value.src} fit="cover" className="distImage"/>
    </Box>
  )}
</Distribution>
);
const BraggingRights = () => (
    <div id="testing" 
        style={{ margin: '2.5%' }}
    >
        <h2> Bragging Rights </h2>
        <h3> Programming Languages: </h3>
        <ul>
            <li> Python (Machine Learning Libraries): Expert</li>
            <li> Python (Web): Proficient </li>
            <li> Javascript (Native): Proficient </li>
            <li> Javascript (React): Proficient </li>
            <li> C (Native): Experienced </li>
            <li> C (CUDA GPU) : Experienced </li>
            <li> C++ : Experienced  </li>
            <li> z/OS + PLX (IBM Mainframe) : Experienced </li>
        </ul>
        <h3> Actual Languages </h3>
        <ul>
        <li> Polish:   Fluent  </li>
        <li> English:  Fluent (Second Language) </li> 
        <li> Russian:  Novice   </li>
        </ul>
    </div>
);



const HeaderView = () => (
  <Grommet>
  <Header background="light-4" pad="medium" height="xsmall">
  {/* <Anchor
    href="https://github.com/dambem"

    label="damian bemben"
  /> */}
  <Heading level="3">damian bemben</Heading>
  <ResponsiveContext.Consumer>
    {size =>
      size === 'small' ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            justifyContent="center"
            icon={<MenuIcon color="brand" />}
            items={[
              {
                icon: <Twitter />,
                href: 'https://twitter.com/dambem',
                label: "twitter",
                
              },
              {
                icon: <Github />,
                href: 'https://github.com/dambem',
                label: "github"
              },
              {
                icon: <Linkedin />,
                href: 'https://www.linkedin.com/in/bemben/',
                label: "linkedin"
              },
            ]}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          
          <Anchor href="https://twitter.com/dambem"  icon={<Twitter />} />
          <Anchor href="https://github.com/dambem" icon={<Github />} />
          <Anchor href="https://www.linkedin.com/in/bemben/" icon={<Linkedin />} />
        </Box>
      )
    }
  </ResponsiveContext.Consumer>
</Header>
</Grommet>

);
const FooterView = () => (
  <Footer
  background="dark-2"
  pad={{ horizontal: 'large', vertical: 'small' }}
>
  <Box direction="row" gap="small">
    <Text alignSelf="center">damian bemben</Text>
  </Box>
  <Text textAlign="center" size="small">
    © 2021 Copyright (just kidding, this stuff is free to use)
  </Text>
</Footer>
);
const MainApplication = () => {
  const myRef = useRef(null);
  const executeScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({behavior: 'smooth'});
    }
  } 
  

  const [darkMode, setDarkMode] = React.useState(false);
  const [showSidebar, setState] = React.useState(false);
  return (
    <Grommet full theme={theme} themeMode={darkMode ? "dark" : "light"}>
      
      <ResponsiveContext.Consumer>
          {size => (
            <Box fill> 

              <Box direction='row' flex>
                <Box
                  flex
                  alignContent="stretch"
                  
                >
                  <Stack anchor="center">
                    <Image src="sela.png"></Image>
                    {/* <Distribution_ex /> */}
                    <Box
                      background='light-2'
                      id="welcome_badge"
                      align='center'
                      justify='center'
                    >
                      <Heading level="3" >hi, i'm <b>damian bemben</b>, <br></br> welcome to my portfolio!</Heading>
                      <Button
                      icon={<Notification />}
                      onClick={() => setState(!showSidebar)}
                      id='rotator'
                      label="view my cv"
                      />
                      <br></br>
                      <Button
                      icon={<CaretDown />}
                      onClick={executeScroll}
                      id='rotator'
                      label="examples"
                      />
                    
                    </Box>
                    
                  </Stack>
                  <Box
                    flex
                    align='center'
                    >
                    
                    <h1 ref={myRef}></h1> 
                    <BraggingRights />
                   
                    <BraggingRights/>
                    
                    
                  </Box>
                </Box>
                  
                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    
                    >
                      <BraggingRights />
                      {/* <Button
                        label="Toggle Theme"
                        primary
                        alignSelf="center"
                        margin="large"
                        onClick={() => setDarkMode(!darkMode)}
                      /> */}
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setState(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      <BraggingRights />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>

          )}


        </ResponsiveContext.Consumer>
    </Grommet>
  );
};

class App extends Component {

  render() {

    return (
      <Grommet full theme={theme}>
        <HeaderView/>
        <MainApplication/>
        
        <FooterView/>
      </Grommet>

    );
  }
}

export default App;