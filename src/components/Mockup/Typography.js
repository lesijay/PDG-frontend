import React from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';

const Typography = ({ fontSize, fontWeight, 
    lineHeight, letterSpacing, textAlign, opacity, 
    color, cursor, textDecoration,children }) => {

  const Typography = Styled.p`
    
    font-size: ${fontSize};
    font-weight: ${fontWeight || "normal"};
    font-stretch: normal;
    font-style: normal;
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    text-align: ${textAlign || "left"};
    color: ${color || "#22262a"};
    cursor:${ cursor || "default" };
    opacity: ${ opacity || "none"};
    text-decoration: ${ textDecoration || "none"};
    `;

  return (<Typography>
      {children}
  </Typography>);
};


Typography.propTypes = {
  lineHeight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string
}

export default Typography;
