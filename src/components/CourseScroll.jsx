import React from "react";
import picture from "../assets/shumbul-course.jpg";

const CourseScroll = () => {
  return (
    <>
      <h1 className="flex justify-center mt-6 font-semibold md:text-3xl text-xl mb-4">
        Our best course are here{" "}
      </h1>
      {/* this is the main container  */}
      <div className=" flex md:flex-row flex-col">
        {/* this is the left container */}
        <div className="md:w-1/2 w-auto">
          <p className="flex justify-start text-xl text-blue-600">
            Live classes
          </p>
          <p className="flex justify-start text-3xl mt-2 ">Arrays & Vectors</p>
          <p>
            Learn to tackle coding interview questions by mastering the concepts
            and applications of Data Structures and Algorithms through our
            comprehensive DSA for Coding Interviews course. In this Week 2
            course, Arrays & Vectors will be covered in-depth.
          </p>
          <div>
            <p className="flex justify-start text-3xl mt-2 ">
              Why should you take this course?
            </p>
            <div className="flex flex-col bg-blue-100 rounded-3xl p-8 mt-8">
              <p>
                1.Master the art of solving complex coding problems with ease.
              </p>
              <br />
              <p>
                2.Utilize arrays and vectors, the essential building blocks of
                data structures.
              </p>
              <br />
              <p>
                3.Excel in algorithms using arrays and vectors as key tools.
              </p>
            </div>
          </div>
        </div>
        {/* this is the right container */}
        <div className="md:w-1/2 w-auto m-2 mt-4">
          <img className="rounded-3xl" src={picture} alt="" />
        </div>
      </div>
    </>
  );
};

export default CourseScroll;
