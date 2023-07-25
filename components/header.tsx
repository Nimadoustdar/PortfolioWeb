"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import {  BsFiletypePdf, BsGithub, BsLinkedin } from "react-icons/bs";
 import {AiOutlineClose,AiOutlineMail, AiOutlineMenu} from "react-icons/ai"

export default function Header() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="w-full flex fixed sm:justify-center justify-between  items-center top-[0.15rem] left-1/2 h-12 -translate-x-1/2 pt-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className=" hidden sm:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

      {/* Hamburger Icon */}
      <div
            onClick={handleNav}
            className="sm:hidden px-4 cursor-pointer"

          >
            <AiOutlineMenu size={25} />
          </div>
       {nav &&
          <div
          className={
            nav ? "sm:hidden fixed left-0 top-0 w-full h-full bg-black/70 min-h-screen" : ""
          }
        >
            {/* Side Drawer Menu */}
            <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-100 overflow-y-auto dark:bg-gray-800 min-h-screen"
                : " fixed left-[-100%] top-0  ease-in duration-100 dark:bg-gray-800"
            }
          >
            <div>
              <div className="flex justify-between items-center">
               
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let`s build something legendery together
                </p>
              </div>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-slate-950"
                >
                   <AiOutlineClose /> 
                </div>
              </div>
            </div>
            <div className="py-4 flex-col ">
              <ul className="uppercase">
              {links.map((link) => (
            <motion.li
              className="py-4 text-sm"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => setNav(false)} 
            >
              <Link
               
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
              </ul>
              <div className="pt-14 ">
                <p className="uppercase tracking-widest text-[#5651e5] border-t border-gray-300 pt-3">
                  Let`s Contact
                </p>
                <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-slate-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                       <BsLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Nimadoustdar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-slate-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsGithub />
                    </div>
                  </a>
                  <Link href="#contact">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-slate-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                     <AiOutlineMail /> 
                    </div>
                  </Link>
                  <a     href="/CV.pdf"
          download>
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-slate-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                       <BsFiletypePdf /> 
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
      
            }
      <motion.h1
        className="px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl sm:hidden flex"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Nima</span>
       </motion.h1>
      </nav>
    </header>
  );
}
