import React from "react";
import Sizing from "../components/Mockup/Sizing";
import Typography from "../components/Mockup/Typography";
import SectionWrapper from "../components/Mockup/SectionWrapper";
import network from "../assets/network.png";
import parenthood from "../assets/parenthood.png";
import strengths from "../assets/strengths.png";
import weaknesses from "../assets/weaknesses.png";
import marriage from "../assets/marriage.png";
import job from "../assets/job.png";

const Services = ({ ServicesInfo }) => {
  return (
    <SectionWrapper>
      {ServicesInfo.map((items, i) => (
        <Sizing
          height="18vh"
          padding="3.6rem 2rem"
          display="flex"
          flexDirection="column"
          alignContent="space-around"
          justifyContent="space-around"
          border="2px solid black"
          key={i}
        >
          <Typography
            fontSize="3.6rem"
            lineHeight="1.3"
            textAlign="center"
          >
            {items.icon}
          </Typography>
          <Typography
            fontSize="2rem"
            fontWeight="600"
            lineHeight="1.2"
            textAlign="center"
            color="#22262a"
          >
            {items.name}
          </Typography>
        </Sizing>
      ))}
    </SectionWrapper>
  );
};

Services.defaultProps = {
  ServicesInfo: [
    {
      icon: <img src={strengths} alt="strengths" />,
      name: "Maximize your Strengths"
    },
    {
      icon: <img src={weaknesses} alt="weaknesses" />,
      name: "Deal with your Weaknesses"
    },
    {
      icon: <img src={network} alt="network" />,
      name: "Find great networks"
    },
    {
      icon: <img src={marriage} alt="marriage" />,
      name: "Love better"
    },
    {
      icon: <img src={parenthood} alt="parenthood" />,
      name: "Parent with understanding"
    },
    {
      icon: <img src={job} alt="job" />,
      name: "Take on Fulfilling Job Roles"
    }
  ]
};

export default Services;
