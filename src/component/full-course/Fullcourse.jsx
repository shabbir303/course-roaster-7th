/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Course from "./course/course";


const Fullcourse = () => {
    const [fullcourse, setFullcourse] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setFullcourse(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1>Course:{fullcourse.length} </h1>
            <div className=" grid grid-cols-3 gap-[20px]">
            {
                fullcourse.map(singleCourse=> <Course course={singleCourse}></Course>)
            }
            </div>
        </div>
    );
};

export default Fullcourse;