import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../components/Hero";
import HomeScroll from "../components/HomeScroll";
import AboutScroll from "../components/AboutScroll";
import YoutubeScroll from "../components/YoutubeScroll";
import CourseScroll from "../components/CourseScroll";
import Social from "../components/Social";

const cards = [
  { id: 1, title: "Card Title 1", content: "Card Content 1" },
  { id: 2, title: "Card Title 2", content: "Card Content 2" },
  { id: 3, title: "Card Title 3", content: "Card Content 3" },
  { id: 4, title: "Card Title 4", content: "Card Content 4" },
  { id: 5, title: "Card Title 5", content: "Card Content 5" },
];

const Home = () => {
  const [isInView, setIsInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true); // State to control scrolling

  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    margin: "0px 0px -50px 0px",
  });

  React.useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  // Toggle scrolling on and off when a card is clicked
  const handleCardClick = () => {
    setIsScrolling((prev) => !prev); // Toggle scrolling state
  };

  return (
    <div className="flex md:h-screen h-auto md:flex-row flex-col ">
      {/* 20% Image Section */}
      <div className="md:w-[20%] w-auto">
        <Hero />
      </div>

      {/* 75% Scrolling Content Section */}
      <div
        className="md:w-[75%] w-auto overflow-hidden flex  justify-center relative bg-gray-100 md:h-screen h-[400px]"
        ref={ref}
      >
        {isInView && (
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ y: "100%" }}
            animate={isScrolling ? { y: "-100%" } : { y: 0 }} // Stop scrolling when isScrolling is false
            transition={{
              duration: 17, // Adjust speed as needed
              ease: "linear",
              repeat: isScrolling ? Infinity : 0, // Loop only if scrolling is true
            }}
          >
            {/* Additional Content Below Cards */}
            <div className="  p-6 w-auto   ">
              <HomeScroll />
              <AboutScroll />
              <YoutubeScroll />
              <CourseScroll />
              <h2 className="text-xl font-bold">Additional Content</h2>
              <p className="text-gray-600">
                This content will also scroll with the cards.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 w-[80%] mx-auto rounded-lg text-center">
              <h2 className="text-xl font-bold">More Content</h2>
              <p className="text-gray-600">
                Keep adding more content below and it will keep scrolling.
              </p>
            </div>
            {/* Add more content as needed */}
          </motion.div>
        )}
      </div>

      {/* here i added with 5% */}
      <div className="md:w-[5%] w-auto">
        <Social/>
      </div>
    </div>
  );
};

export default Home;
