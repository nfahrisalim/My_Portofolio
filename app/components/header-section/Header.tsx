"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[rgba(10,10,10,0.85)] sm:bg-linear-to-r sm:from-[#ffffff1f] sm:to-[#7373731f] mt-4 sm:mt-8 backdrop-blur-md">
          <Image
            src="/dissent-logo.svg"
            width={32}
            height={36}
            alt="logo"
            className="select-none"
          />
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl text-white"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/50 hover:text-white">
            <Link
              href="#home"
              className={`${sectionInView === "home" && "text-white"} `}
            >
              Home
            </Link>
            <Link
              href="#work"
              className={`${sectionInView === "work" && "text-white"} `}
            >
              Experience
            </Link>
            <Link
              href="#about"
              className={`${sectionInView === "about" && "text-white"} `}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`${sectionInView === "contact" && "text-white"} `}
            >
              Contact
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex">
            <Link target="_blank" href="https://linkedin.com/in/nfahrisalim">
              <Icon icon="hugeicons:linkedin-01" className="text-white/60 hover:text-white" />
            </Link>
            <Link target="_blank" href="https://github.com/nfahrisalim">
              <Icon icon="hugeicons:github" className="text-white/60 hover:text-white" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/nfahrisalim/">
              <Icon icon="akar-icons:instagram-fill" className="text-white/60 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu 
            onMenuOpen={setMenuOpen}
            className="backdrop-blur-md bg-[rgba(0,0,0,0.85)] text-white"
          />
        )}
      </AnimatePresence>
    </>
  );
}
