import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'


const Button = ({ width, height, opacity, backgroundColor, border,children}) => {
    const Button = Styled.button`
        width: ${width};
        height: ${height};
        opacity: ${opacity || "normal"};
        border-radius: 4px;
        background-color: ${backgroundColor};
        border: ${border || "none"}
        cursor:pointer;
}
    `;

    return ( 
        <Button>
            {children}
        </Button>
     );
}

Button.propTypes = {
    height: PropTypes.string.isRequired,
    opacity: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
    backgroundColor: PropTypes.string.isRequired,
}
 
export default Button;