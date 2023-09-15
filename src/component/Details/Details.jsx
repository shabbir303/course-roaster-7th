/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Detail from "../Detail/Detail";


const Details = ({details}) => {
    return (
        <div className="w-1/3  bg-white p-4 fixed right-[30px] rounded-lg ">
            <h1 className="text-[20px] font-[700] text-black mb-[21px] ">Course Name</h1>
           <div >
           {
                details.map(singleDetail =><Detail detail={singleDetail}></Detail>)
            }
           </div>
        </div>
    );
};

export default Details;
