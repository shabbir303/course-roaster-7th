/* eslint-disable react/prop-types */


const Course = ({course, handleDetail, handletime, handleTotal}) => {
    const {image, title, description, price,credit_hour }=course;
    
    return (
        <div className=" bg-white items-center rounded-xl ">
            <img src={image}  className="w-[90%] mx-auto mt-[15px] " />
            <h1 className=" w-[90%] mx-auto text-[18px] font-[600] text-black my-4 " >{title}</h1>
            <h1 className=" w-[90%] mx-auto text-[14px] font-[400] text-[#0f0f0f99] ">{description} </h1>
            <div className="flex justify-between w-[90%] mx-auto text-[#1C1B1B99] text-[16px] font-[500] mt-[10px] ">
            <div className="flex justify-evenly">
             <img src="/dollar-sign 1.png" alt="" srcSet="" />   
            <h1 className=" ">Price : {price}</h1>
            </div>
            <div className="flex gap-[10px]">
            <img src="/Frame.png" alt="" />   
            <h1>Credit : {credit_hour}hr </h1>
            </div>
            </div>
            <button onClick={()=> {handleDetail(course);
             handletime(credit_hour) ; handleTotal(price)
           } } className=" w-[90%] mx-auto  bg-[#2F80ED] flex justify-center items-center py-[5px] my-[15px] rounded-lg text-white text-[18px] font-[500] " >Select</button>
        </div>
    );
};

export default Course;