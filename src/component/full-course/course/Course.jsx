/* eslint-disable react/prop-types */


const Course = ({course}) => {
    const {image, title, description, price,credit_hour }=course;
    return (
        <div className=" bg-white items-center rounded-xl ">
            <img src={image}  className="w-[90%] mx-auto mt-[15px] " />
            <h1 className=" w-[90%] mx-auto text-[18px] font-[600] text-black my-4 " >{title}</h1>
            <h1 className=" w-[90%] mx-auto text-[14px] font-[400] text-[#0f0f0f99] ">{description} </h1>
            <div className="flex justify-between w-[90%] mx-auto text-[#1C1B1B99] text-[16px] font-[500] mt-[10px] ">
            <h1 className=" ">{price}</h1>
            <h1>{credit_hour} </h1>
            </div>
            <button className=" w-[90%] mx-auto  bg-[#2F80ED] flex justify-center items-center py-[5px] my-[15px] rounded-lg text-white text-[18px] font-[500] " >Select</button>
        </div>
    );
};

export default Course;