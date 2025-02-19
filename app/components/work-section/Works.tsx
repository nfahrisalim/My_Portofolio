import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "SRE UNHAS",
      gitLink: "https://github.com/fathinahnj/sre-v4",
      liveLink: "https://sreunhas.id/",
      about:
        "Website dedicated for Society of Renewable Energy Universitas Hasanuddin",
      stack: ["HTML", "CSS", "Javascript", "tailwindcss"],
      img: "/sreunhas.svg",
    },
    {
      title: "Hellocation",
      // gitLink: "https://github.com/nfahrisalim/hellocation",
      liveLink: "https://hellocation.id//",
      about:
        "Wordpress based website for Scholarship education platform in volunteering with Hellocation",
      stack: ["wordpress"],
      img: "/Hellocation.svg",
    },
    {
      title: "Arknights",
      gitLink: "https://github.com/nfahrisalim/Arknights",
      liveLink: "https://arknightsdissent.netlify.app/",
      about:
        "A test website create for fulfilling the my website course",
      stack: ["HTML", "CSS", "javascript", "bootstrap"],
      img: "/arknights.svg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Retro Blackjack game",
      gitLink: "https://github.com/nfahrisalim/Blackjack",
      liveLink: "https://retroblackjack.netlify.app/",
      about:
        "A retro themed blackjack game using Pixelebes design",
      stack: ["html", "css", "javascript", "bootstrap"],
      img: "/Blackjack.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
