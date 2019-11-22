import React from 'react';
import Styled from 'styled-components'


const SelectInput = ({ width,height,border,backgroundColor, color,fontSize,padding, lineHeight, letterSpacing, children }) => {

    const SelectInput = Styled.select`
        width: ${ width ||"100%"};
        height: ${ height || "100%" };
        border-radius: 4px;
        padding: ${ padding || "0px 15rem"};
        border: ${ border || "solid 2px #f1f3f4" };
        font-size: ${ fontSize };
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: ${ lineHeight || "normal" };
        letter-spacing: ${ letterSpacing || "normal" };
        text-align: left;
        color: ${ color || "#22262a" };
        background-color: ${ backgroundColor || "#fff" };
    `; 


    return ( 
        <SelectInput>
            {children.map((item, i) => (
                <option key={i} value={item}>{item}</option>
            ))}      
        </SelectInput>
     );
}
 
export default SelectInput;