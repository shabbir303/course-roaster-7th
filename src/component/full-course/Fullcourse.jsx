import { useEffect } from "react";
import { useState } from "react";


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

        </div>
    );
};

export default Fullcourse;