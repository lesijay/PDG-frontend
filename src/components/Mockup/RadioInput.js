import React from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';

const RadioInput = ({ backgroundColor,type,width,height,border }) => {
  const RadioInputSelection = Styled.input`
        width: ${width || "33.6px"};
        height: ${height || "33.6px"};
        border-radius: 999px;
        background-color: ${backgroundColor || "#c1c8ce"};
        border: ${border || "none"};

    `;

  return (
    <RadioInputSelection type={type}/>
  );

};

RadioInput.propTypes = {
  color: PropTypes.string,
}

export default RadioInput;



// const TextInput = ({ width, height, border,placeholder,type,color,backgroundColor}) => {

//     const TextInput = Styled.input`
//         width: ${width || "100%"};
//         height: ${height};
//         border-radius: 4px;
//         border: ${border || "none"};
//         color: ${color};
//         background-color: ${backgroundColor};
  
//     `;
//     return (  
//         <TextInput placeholder={placeholder} type={type}/>
//     );
// }
