/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";


const Detail = ({detail, i}) => {
    const {title, credit_hour} = detail
    let counter = 0;
   
    return (
        <div>
            
        <div>
            <ol ><li className="text-[16px] font-[400] text-[#1C1B1B99] leading-[30px]">{i + 1}. {title}</li></ol>
        </div>
        </div>
    );
};

export default Detail;

