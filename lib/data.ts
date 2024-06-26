import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import alfa from "@/public/alfa.png";
import bonyad from "@/public/bonyad.png";
import polytiz from "@/public/polytiz.png";
import rahdoon from "@/public/rahdoon.png";
import fit from "@/public/fitnes.png";
import antbuildz from "@/public/antbuildz.png";
import sivan from "@/public/sivan.png";
import crypto from "@/public/crypto.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Islamic Azad University Science and Research",
    location: "Tehran, Iran",
    description:
      "Bachelor’s degree in Petroleum engineering",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2014 - Sep 2018 (4yrs)",
  },
  {
    title: "Front-End Developer Agor Studio",
    location: "Tehran, Iran",
    description:
      "Experienced freelance developer with a successful track record at Agor Studio. Proven expertise in delivering multiple projects during this period. Demonstrated dedication and proficiency in handling various tasks and challenges. Recognized for consistently providing high-quality results and earning positive feedback from clients and colleagues. A reliable and skilled professional with a strong work ethic and a passion for producing outstanding outcomes.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2020 - Apr 2023",
  },
  {
    title: "Quera bootcamp",
    location: "Tehran, Iran",
    description:
      "We worked on a task manager in a BootCamp to achieve hard and soft skills. The task manager is working with React.js.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - Apr 2023",
  },
  {
    title: "Front-End Developer ChatreDanesh",
    location: "Tehran, Iran",
    description:
      "Experienced UI/UX designer with one year of hands-on expertise in developing an e-commerce website, encompassing front-end design and backend communication within a private company.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - March 2024 ",
  },
 
] as const;

export const projectsData = [
  {
    title: "alfamonte",
    description:
      "- Sleek web solution crafted with HTML, SCSS, Swiper, Select2, and Bootstrap",
    tags: ["HTML", "jQuery", "Bootstrap ","SASS","Responsive Design"],
    imageUrl: alfa,
    hash:'https://alfamonte.ir/'
  },
  {
    title: "bonyadonline",
    description:
      "- Interactive site developed with HTML, SCSS, jQuery, Swiper, Select2, and Bootstrap.",
    tags: ["HTML", "jQuery", "Bootstrap ", "SASS","Responsive Design"],
    imageUrl: bonyad,
    hash:'https://bonyadonline.com/'
  },
  {
    title: "polytiz",
    description:
      " Dynamic website using HTML, SCSS, jQuery, Swiper, Select2, and Bootstrap.",
      tags: ["HTML", "jQuery", "Bootstrap ", "SASS","Responsive Design"],
      imageUrl: polytiz,
      hash:'https://polytiz.ir/'
  },
  {
    title: "rahdoon",
    description:
      "- Engaging web presence featuring HTML, SCSS, jQuery,  Swiper, Select2, Bootstrap, and SweetAlert",
      tags: ["HTML", "jQuery", "Bootstrap ", "SASS","Responsive Design"],
      imageUrl: rahdoon,
      hash:"https://rahdoon.com/"
  },
  // {
  //   title: "nimafitness",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "MUI", "Responsive Design"],
  //   imageUrl: fit,
  //   hash:"https://nimafitness.netlify.app/"
  // },
  // {
  //   title: "nimacrypto",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //     tags: ["JavaScript","React", "MUI" ,"Responsive Design"],
  //     imageUrl: crypto,
  //     hash:'https://nimacrypto.netlify.app/'
  // },
  {
    title: "antbuildz",
    description:
      "- Innovative website powered by Next.js, React, and Bootstrap.",
    tags: ["JavaScript","React", "Next.js", "Bootstrap","Responsive Design"],
    imageUrl: antbuildz,
    hash:"https://antbuildz.com/"
  },
  {
    title: "sivanexchange",
    description:
      "- Modern platform built with Next.js, React, and Bootstrap.",
    tags: ["JavaScript","React", "Next.js", "Bootstrap","Responsive Design"],
    imageUrl: sivan,
    hash:"https://sivanexchange.com/en"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  'SASS',
  "Tailwind",
  'Bootstrap',
  'MUI',
  "Redux",
  "GraphQL",
  "REST API",
  "Responsive Design",
  "Figma"


] as const;
