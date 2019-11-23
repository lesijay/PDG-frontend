import React from "react";
import Sizing from "./Sizing";
import Typography from "./Typography";
import Styled from "styled-components";

import Button from "./Button";

const Hero = () => {

    const Background = Styled.section`
      background : url(${process.env.PUBLIC_URL + '/bg.jpg'});
      width:"100%";
      height:"60vh";
      flex-direction:"column";
      align-content:"space-around";
      justify-content:"space-around";
      margin:"0 auto";
    `
  return (
    <Background>
        <Sizing width="100%" >
        <Sizing maxWidth="1440px"
        display="flex"
        height="50vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        margin="0 auto"
        padding="5rem">
      <Typography
        fontSize="2rem"
        fontWeight="bold"
        textAlign="center"
        color="#000"
        letterSpacing="1rem"
      >
        GET TO
      </Typography>
      <Typography
        fontSize="5rem"
        fontWeight="bold"
        textAlign="center"
        color="#000"
        lineHeight="1.5rem"
        letterSpacing="1.5rem"
      >
        DISCOVER WHO YOU ARE
      </Typography>
      <Button width="20rem" height="4rem" color="white" backgroundColor="#e3b04b">Take Personality Test</Button>
      </Sizing>
      </Sizing>
    </Background>
  );
};



export default Hero;
