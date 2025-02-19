import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Fulltime learner, student, and child
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I don’t just see data as numbers I see it as a challenge.
            I love digging into datasets, training models, and spotting patterns
            that aren’t obvious at first glance. As an information systems student
            I spend a lot of time making sure data-driven solutions actually make sense 
            and aren’t just fancy algorithms. For me, the best part of data science 
            is turning raw information into something useful and impactful.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I also have a huge love for sleek, modern design, especially 
          when it comes to web development. I enjoy playing around with UI/UX, 
          tweaking layouts, and making websites look and feel smooth. 
          I always try to find the balance between functionality and aesthetics 
          because I believe good design should make technology effortless to use. 
          There’s something really satisfying about building something that not only 
          works well but also looks great.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          But I’m not all about the serious, technical stuff I love fun, 
          over the top things too. I’ve always been into Tokusatsu, and 
          I still enjoy the flashy effects, dramatic fights, and creative storytelling. 
          I think there’s something cool about staying connected to childhood favorites, 
          and honestly, that sense of excitement fuels my creativity. 
          Whether it’s coding, designing, or just geeking out over something fun, 
          I always find a way to bring passion into what I do. Wanna know me
            more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1OCn5AZTXDXBrw-zjBe-vAPAHvKKlXw_s/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript, React, Next.js, TypeScript, HTML5, Git/GitHub, laravel, javafx.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Bootstrap.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, Canva.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
