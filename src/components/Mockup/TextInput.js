import React from 'react';
import Styled from 'styled-components'
import PropTypes from 'prop-types';

const TextInput = ({ width, height, border,placeholder,type,color,backgroundColor}) => {

    const TextInput = Styled.input`
        width: ${width || "100%"};
        height: ${height};
        border-radius: 4px;
        border: ${border || "none"};
        color: ${color};
        background-color: ${backgroundColor};
  
    `;
    return (  
        <TextInput placeholder={placeholder} type={type}/>
    );
}

TextInput.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string,
}

 
export default TextInput;