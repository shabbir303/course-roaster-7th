/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Detail from "../Detail/Detail";


const Details = ({details, remainningCredit, addCredit, totalPrice}) => {
    return (
        <div className="  bg-white p-4 fixed right-[280px] rounded-lg ">
            <h1 className="text-[18px] font-[700] text-[#2F80ED]  mb-[14px] mt-[20px] " >Credit Hour Remaining {remainningCredit} hr</h1> < hr className="border-t-1 border-[#1C1B1B33]" />
            <h1 className="text-[20px] font-[700] text-black mb-[21px] mt-[14px] ">Course Name</h1>
           <div className="mb-[20px] " >
           {
                details.map(singleDetail =><Detail detail={singleDetail}></Detail>)
            }
           </div>
           <hr  className="border-t-1 border-[#1C1B1B33]" />
           <h1 className="my-[14px] text-[16px] font-[500] ">Total Credit Hour : {addCredit}</h1>
           <hr className="border-t-1 border-[#1C1B1B33]" />
           <h1 className="my-[14px] text-[16px] font-[500]">Total Price : {totalPrice} </h1>
        </div>
    );
};

export default Details;
