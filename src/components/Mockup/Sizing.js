import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Sizing = ({
  width,
  height,
  opacity,
  backgroundColor,
  padding,
  margin,
  cursor,
  maxWidth,
  fontSize,
  display,
  alignItems,
  justifyContent,
  alignContent,
  justifyItems,
  flexDirection,
  backgroundImage,
  position,
  top,
  left,
  right,
  children
}) => {
  const Sizings = Styled.div`
        width: ${width || "100%"};
        height: ${height || "100%"};
        opacity: ${opacity || "none"};
        background-color: ${backgroundColor || "none"};
        background-image:${backgroundImage || "none"};
        padding: ${padding || "none"};
        margin: ${margin || "none"};
        font-size: ${fontSize || "inherit"};
        display: ${display || "block"};
        justify-content: ${justifyContent || ""};
        align-content: ${alignContent || ""};
        flex-direction: ${flexDirection || ""};
        align-items: ${alignItems || ""};
        max-width: ${maxWidth || ""};
        cursor: ${cursor || "default"};
        top: ${ top || "auto" };
        left: ${ left || "auto" };
        right: ${ right || "auto" };
        position: ${ position || "static" };
        justify-items:${ justifyItems || ""};
    `;

  return <Sizings>{children}</Sizings>;
};

Sizing.propTypes = {
  height: PropTypes.string.isRequired
};

export default Sizing;
