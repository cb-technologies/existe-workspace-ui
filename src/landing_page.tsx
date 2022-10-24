import * as React from 'react';
import "tachyons";
import { Provider, Heading, Subhead } from "react-redux";
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";


function Landing_page() {
    return (
        <Provider>
    <Hero
      color="white"
      backgroundImage="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg"
      bg="black"
      bgOpacity={0.1}
    >
      <Heading fontSize={150}>DiagNUS</Heading>
      <Subhead fontSize={[2, 3]}>Be the Change from Within</Subhead>
      <Flex mt={3}>
        <CallToAction bg="grey" mr={3}>
          Start Petition
        </CallToAction>
        <CallToAction>Start Campaign</CallToAction>
      </Flex>
      <ScrollDownIndicator />
    </Hero>
  </Provider>
    );
  }

export default Landing_page;

