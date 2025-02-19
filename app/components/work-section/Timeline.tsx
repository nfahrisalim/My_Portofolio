"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/sreunhas-logo.svg",
    jobTitle: "Frontend Web Developer",
    company: "Society Of Renewable Energy Hasanuddin University",
    jobType: "Organization",
    duration: "Feb 2024 - Feb 2025",
    stuffIDid: [
      "Designing user interfaces and navigation menus.",
      "Ensuring that web pages look and function well on a variety of devices and screen sizes by using responsive design techniques like media queries and flexible grids.",
      "Designing and implementing the layout of web pages using HTML and CSS to ensure they are visually appealing and user-friendly.",
      "Creating customized forms for SICLUS 2024 to use.",
      "Identifying and fixing bugs or issues in the front-end code to ensure smooth functionality.",
    ],
  },
  {
    companyImg: "/hc-logo.svg",
    jobTitle: "Staff of Web developer",
    company: "Hellocation korea",
    jobType: "Volunteer",
    duration: "Oct 2024 - Present",
    stuffIDid: [
      "Creating wireframes and interactive prototypes to visualize the layout and functionality.",
      "Designing the visual elements of the interface, such as color schemes, typography, icons, and imagery.",
      "Structuring and organizing content to make it easily navigable.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
