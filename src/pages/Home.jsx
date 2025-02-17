import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Hero from "../components/Hero";
import HomeScroll from "../components/HomeScroll";
import AboutScroll from "../components/AboutScroll";
import YoutubeScroll from "../components/YoutubeScroll";
import CourseScroll from "../components/CourseScroll";
import Social from "../components/Social";

const Home = () => {
  const [scrollingComplete, setScrollingComplete] = useState(false); // Track when scrolling is complete
  const controls = useAnimation(); // Framer Motion controls
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Trigger the scroll animation to the bottom
    controls.start({ y: "0%" }).then(() => {
      setScrollingComplete(true); // After animation completes, allow user scroll
    });
  }, [controls]);

  const handleScroll = (e) => {
    // Only allow manual scrolling after the animation completes
    if (scrollingComplete) {
      const scrollTop = e.target.scrollTop;
      setScrollPosition(scrollTop);
    }
  };

  return (
    <div className="flex md:h-screen  md:flex-row flex-col overflow-hidden">
      {/* 20% Image Section */}
      <div className="md:w-[20%] w-auto">
        <Hero />
      </div>

      {/* 75% Scrolling Content Section */}
      <div
        className={`md:w-[75%] w-auto ${
          scrollingComplete ? "overflow-y-auto" : "overflow-hidden"
        } flex justify-center relative bg-gray-100 md:h-screen h-auto`}
        onScroll={handleScroll}
      >
        <motion.div
          className="flex flex-col space-y-6 w-full"
          animate={controls} // Use controls for animation
          initial={{ y: "100%" }}
          transition={{
            duration: 5, // Adjust speed as needed for scroll animation
            ease: "linear",
            repeat: 0, // No repeat, stops at the bottom
          }}
        >
          {/* Additional Scrolling Content */}
          <div className="p-6 w-auto">
            <HomeScroll />
            <AboutScroll />
            {/* <YoutubeScroll /> */}
            <CourseScroll />
          </div>
        </motion.div>
      </div>

      {/* 5% Social Media Section */}
      <div className="md:w-[5%] w-auto">
        <Social />
      </div>
    </div>
  );
};

export default Home;
