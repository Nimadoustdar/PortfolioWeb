"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-medium">
      Enthusiastic Frontend Developer with four years of expertise in HTML, CSS, 
      and one year of hands-on experience in React and Next.js.
       My background in HTML and CSS spans four years, while my recent focus has been on mastering React.
        Proficient in JavaScript and TypeScript, I am dedicated to crafting thoughtful web applications using the latest
         technologies. Eager to further advance my skills in React, I am open to exciting challenges that will
          foster my growth as a developer.
           My commitment lies in delivering high-quality, 
        user-centric applications and continuously improving in the ever-evolving world of frontend development.
       
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
