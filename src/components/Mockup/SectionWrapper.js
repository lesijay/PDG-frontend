import React from "react";
import  Sizing  from "./Sizing";

const SectionWrapper = ({ children }) => {
  return (
    <Sizing width="100%">
      <Sizing
        maxWidth="1440px"
        display="flex"
        alignItems="center"
        margin="0 auto"
      >
        {children}
      </Sizing>
    </Sizing>
  );
};

export default SectionWrapper;
